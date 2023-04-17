import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Image } from "native-base";
import { Back } from "../../components/Vectors";
import Button from "../../components/Buttons/ButtonComponent/Button";
import styles from "./checkemailstyles";
import { primaryColors } from "../../styles/Colors";
// import useAuthContext from "../hooks/useAuthContext";
import routes from "../../routes";

const checkEmailIcon = require("../../assets/checkEmail.png");

const statusBarHeight = getStatusBarHeight();

const CheckEmail = ({ navigation }: { navigation: any }) => {
  // const { verifyUserHandler } = useAuthContext();

  const goBack = () => navigation.goBack();
  const goToLogin = () => navigation.navigate(routes.login);

  const openChangePassword = () => {
    navigation.navigate(routes.changePassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <Button style={styles.backBtn} onPress={goBack} variant="tertiary">
          <Back height={30} fill={primaryColors.lightBlue} width={30} />
        </Button>
      </View>
      <View style={styles.detailSection}>
        <Image source={checkEmailIcon} alt="check email icon" />
        <Text style={styles.detailSectionHeading}>Check your email</Text>
        <Text style={styles.detailSectionLead}>
          We have sent recover password instructions to your email
        </Text>
        <View style={styles.btnWrapper}>
          <Button
            onPress={openChangePassword}
            label="Open email app"
            variant="primary"
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            style={styles.resendBtn}
            onPress={openChangePassword}
            label="Resend email"
            variant="secondary"
          />
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button onPress={goToLogin} variant="tertiary" label="Back to login" />
      </View>
    </SafeAreaView>
  );
};

export default CheckEmail;
