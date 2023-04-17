import { FACEBOOK_APP_ID } from "../../../constants";
import Toast from "react-native-toast-message";
import * as Facebook from "expo-facebook";

const initSocialFacebookLogin = async () => {
  try {
    await Facebook.initializeAsync({ appId: FACEBOOK_APP_ID });
  } catch (e) {
    console.log(e);
  }
};

export const fbLogin = async () => {
  try {
    await initSocialFacebookLogin();
    const initResponse = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });

    if (initResponse.type === "cancel") {
      throw new Error("Authentication Canceled");
    }

    // GET USER DATA FROM FB API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${initResponse?.token}&fields=id,name,email,picture.height(500)`
    );
    const user = await response.json();

    // GET PROFILE IMAGE DATA FROM FB API
    // NOTE THAT I SET THE IMAGE WIDTH TO 500 WHICH IS OPTIONAL
    // const pictureResponse = await fetch(
    //   `https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${initResponse?.token}`
    // );
    // const pictureOBject = await pictureResponse.json();
    const userObject = {
      ...user,
    };

    return {
      type: initResponse.type,
      token: initResponse?.token,
      user: userObject,
    };
  } catch (e) {
    return { error: e };
  }
};

export const handleFBLoginPress = async () => {
  const userData = await fbLogin();
  if (userData.token && userData.type) {
    return userData;
  } else if (userData.error) {
    Toast.show({
      type: "error",
      text1: JSON.stringify(userData.error) || "Authentication cancelled",
    });
    return undefined;
  }
};
