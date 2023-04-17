import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, Box, Divider, Alert } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Button from "../../../components/Buttons/ButtonComponent";
import { scale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import SocialLogin from "../SocialAuth";
import LoginForm from "./LoginForm";
import styles from "./loginstyles";
import routes from "../../../routes";
import useAuthContext from "../hooks/useAuthContext";

export default function Login({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}, ...others:any) {
  const statusBarHeight = getStatusBarHeight();

  const defaultParams = route.params;
  const defaultFormValue = {
    email: defaultParams?.email,
    password: "",
  };

  const goToSignUp = () => navigation.navigate(routes.signup);
  const goToPasswordReset = () => navigation.navigate(routes.retrievePassword);

  const { loginHandler, isAuthenticated, isLogin, openVerificationScreen } = useAuthContext();


  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate(routes.app);
    }
    if (openVerificationScreen) {
      navigation.navigate(routes.verification);
    }
  }, [isAuthenticated, openVerificationScreen, navigation]);


  useEffect(() => {
    if (isLogin) {
      alert("Logged in")
    }

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Box
          style={[
            styles.wrapper,
            {
              paddingTop: scale(statusBarHeight + 32),
              flex: 1,
            },
          ]}
        >
          <Text style={styles.heading}>Login</Text>
          {/* <View>
            <Text style={styles.socialAuthLead}>Continue with social</Text>
            <SocialLogin navigation={navigation} />
          </View> */}
          {/* <View style={styles.dividerWrapper}>
            <Divider style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <Divider style={styles.divider} />
          </View> */}
          <LoginForm
            defaultValues={defaultFormValue}
            isLoading={isLogin}
            login={loginHandler}
          />
          <View style={styles.loginBtnWrapper}>
            <Button
              style={styles.loginBtn}
              labelStyle={styles.loginBtnLabel}
              onPress={goToPasswordReset}
              variant="tertiary"
            >
              <Text style={styles.loginBtnLabel}>Forgot Password?</Text>
            </Button>
          </View>
          <View style={styles.loginBtnWrapper}>
            <Text style={styles.loginBtnText}>Don’t have an account?</Text>
            <Button
              style={styles.loginBtn}
              labelStyle={styles.loginBtnLabel}
              onPress={goToSignUp}
              variant="tertiary"
            >
              <Text style={styles.loginBtnLabel}>Signup</Text>
            </Button>
          </View>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
