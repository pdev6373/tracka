

import React, { createContext, useState, useEffect, useCallback } from "react";
import Toast from "react-native-toast-message";
import { registerIndieID } from 'native-notify';
import axios from "axios"
import {
  useSignup,
  useVerifyUser,
  useLoginUser,
  useSocialAuth,
} from "../hooks/Mutation/useAuthMutation";
import { handleFBLoginPress } from "../SocialAuth/utils";
import formatErrorMessage from "../../../utils/formatErrorMessage";
import { AuthParams, AuthUser } from "../../../types/Auth";
import {
  saveToStorage,
  getFromStorage,
  deleteFromStorage,
} from "../../../utils/storage";
import { USER_KEY, NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG } from "../../../constants";
import Api from "../../../lib/api/Shared";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import routes from "../../../routes";
import {useNavigation} from "@react-navigation/native"
type UserDataStateProps = {
  isAuthenticated: boolean;
  isVerified: boolean;
  user?: AuthUser;
  openVerificationScreen: boolean;
};

export const AuthContext = createContext<
  | 
  {
      isAuthenticated: boolean;
      isVerified: boolean;
      openVerificationScreen: boolean;
      user?: AuthUser;
      verifyUserHandler: (p: string) => void;
      loginHandler: (p: AuthParams) => void;
      signupHandler: (param: AuthParams) => void;
      fbLogin: () => void;
      logout: () => void;
      isLogin: boolean;
      isSignup: boolean;
      googleLoginHandler: () => void;
    }

  |
   undefined
>
(undefined);

WebBrowser.maybeCompleteAuthSession();

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<UserDataStateProps>({
    isAuthenticated: false,
    isVerified: false,
    user: undefined,
    openVerificationScreen: false,
  });

  const { mutate: signup, isLoading: isSigningUp } = useSignup();
  const { mutate: verifyUser, isLoading: isVerifying } = useVerifyUser();
  const { mutate: loginUser, isLoading: isLoggingin } = useLoginUser();
  const { mutate: socialAuthUser, isLoading: isSocialAuthenticating } =
    useSocialAuth();

  const getUserDataFromStore = async () => {
    const userData = await getFromStorage<UserDataStateProps>(USER_KEY);
    if (userData && userData?.isAuthenticated) {
      setAuthState(() => ({
        ...userData,
      }));
      console.log('userData?.user?.token',userData?.user?.token)
      Api.setAuth(userData?.user?.token || "");
    }
  };

  const socialAuthenticator = useCallback(
    (params: AuthParams) =>
      socialAuthUser(params, {
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: formatErrorMessage(error.message),
            autoHide: false,
          });
        },
        onSuccess: (user) => {
          Api.setAuth(user?.token);
          saveToStorage(USER_KEY, {
            ...authState,
            isVerified: true,
            isAuthenticated: true,
            user,
          });
          setAuthState((prev) => ({
            ...prev,
            user,
            isVerified: true,
            isAuthenticated: true,
            openVerificationScreen: false,
          }));
          Toast.show({
            type: "success",
            text1: "Authenticated successfully",
          });
        },
      }),
    [socialAuthUser, authState]
  );

  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "853647914641-j9irlpcg27j797i6otj41upmi4n6djie.apps.googleusercontent.com",
    iosClientId:
      "853647914641-nmu0ng0946nr09naahr58485cmaq80od.apps.googleusercontent.com",
    androidClientId:
      "853647914641-2cij0igh0s15o7ir081ujgilmpp693t8.apps.googleusercontent.com",
  });

  const fetchUserInfoFromGoogle = useCallback(
    async (token: string) => {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const user = await response.json();
      return socialAuthenticator({
        email: user.email,
        lastName: user.family_name,
        firstName: user.given_name,
        pics: user.picture,
        password: Math.random().toString(36),
      });
    },
    [socialAuthenticator]
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserInfoFromGoogle(authentication?.accessToken!);
    }
  }, [response]);

  const googleLoginHandler = () => {
    promptAsync();
  };

  const deleteUserDataFromStore = async () => {
    await deleteFromStorage(USER_KEY);
  };

  const logout = async () => {
    await deleteUserDataFromStore();
    setAuthState({
      isAuthenticated: false,
      isVerified: false,
      user: undefined,
      openVerificationScreen: false,
    });
  };

  useEffect(() => {
    getUserDataFromStore();
  }, []);


  const signupHandler = (params: AuthParams) => {
    Toast.hide();
    signup(
      {
        email: params?.email.trim(),
        password: params?.password.trim(),
        firstName: params?.firstName,
        lastName: params?.lastName,
      },
      {
        onError: (error) =>
          Toast.show({
            type: "error",
            text1: formatErrorMessage(error.message),
            autoHide: false,
          }),
        onSuccess: (user) => {
          saveToStorage(USER_KEY, { ...authState, user });
          setAuthState((prev) => ({ ...prev, user }));
          Toast.show({
            type: "success",
            text1: "Signed up successfully",
          });
        },
      }
    );
  };

  const verifyUserHandler = (code: string) => {
    if (code && authState.user?.email) {
      verifyUser(
        {
          code,
          email: authState.user?.email,
        },
        {
          onError: (error) => {
            console.log('====', code, authState.user?.email)
            Toast.show({
              type: "error",
              text1: formatErrorMessage(error.message),
              autoHide: false,
            });
          },
          onSuccess: (user) => {
            saveToStorage(USER_KEY, { ...authState, isVerified: true, user });
            setAuthState((prev) => ({
              ...prev,
              user,
              isVerified: true,
            }));
            Toast.show({
              type: "success",
              text1: "You have been verified",
              text2: "Please log in",
            });
          },
        }
      );
    }
  };

  const loginHandler = (param: AuthParams) => {
    if (!param) {
      return;
    }
    loginUser(
      { email: param?.email?.trim(), password: param?.password.trim() },
      {
        onError: (error: any) => {
          console.log(error.response)
          Toast.show({
            type: "error",
            text1: formatErrorMessage(error.message),
            autoHide: false,
          });
          if(error.message == 'You have not verified your account.'){
            let thisUser = {
              verified: false,
              id: 'string',
              email: param?.email?.trim().toLowerCase(),
              token: 'string',
            }
            setAuthState({
              isAuthenticated: false,
              isVerified: false,
              user: thisUser,
              openVerificationScreen: true,
            });
          }
        },
        onSuccess: async(user) => {
         Api.setAuth(user?.token);
          saveToStorage(USER_KEY, {
            ...authState,
            isVerified: true,
            isAuthenticated: true,
            user,
          });
          setAuthState((prev) => ({
            ...prev,
            user,
            isVerified: true,
            isAuthenticated: true,
            openVerificationScreen: false,
          }));

          await registerIndieID(`${user.id}`, NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG);
        },
      }
    );
  };

  const fbLogin = async () => {
    const userData = await handleFBLoginPress();
    if (userData) {
      const [firstName, otherName, lastName]: string[] =
        userData.user.name.split(" ");
      const params = {
        firstName,
        lastName: `${otherName} ${lastName ? lastName : ""}`,
        email: userData.user.email,
        password: Math.random().toString(36),
      };
      socialAuthenticator(params);
    }
  };

  const value = {
    ...authState,
    signupHandler,
    isSignup: isSocialAuthenticating || isSigningUp,
    verifyUserHandler,
    isVerifying,
    isLogin: isSocialAuthenticating || isLoggingin || false,
    loginHandler,
    fbLogin,
    logout,
    googleLoginHandler,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
