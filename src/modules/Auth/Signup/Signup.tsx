import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, Box, Divider } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Button from "../../../components/Buttons/ButtonComponent";
import { scale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import SocialLogin from "../SocialAuth";
import SignupForm from "./SignupForm";
import styles from "./signupstyle";
import routes from "../../../routes";
import useAuthContext from "../hooks/useAuthContext";

export default function Signup({ navigation, route }: { navigation: any }) {
  const statusBarHeight = getStatusBarHeight();
  console.log(route)


  const goToLogin = () => navigation.navigate(routes.login);

  const { signupHandler, isVerified, user, isSignup } = useAuthContext();

  useEffect(() => {
    if (user && !isVerified) {
      navigation.navigate(routes.verification);
    }
    if (user && isVerified) {
      navigation.navigate(routes.login);
    }
  }, [user, isVerified, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Box
          style={[
            styles.wrapper,
            {
              paddingTop: scale(statusBarHeight + 32),
            },
          ]}
        >
          <Text style={styles.heading}>Sign up</Text>
          {/* <View>
            <Text style={styles.socialAuthLead}>Continue with social</Text>
            <SocialLogin navigation={navigation} />
          </View>
          <View style={styles.dividerWrapper}>
            <Divider style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <Divider style={styles.divider} />
          </View> */}
          <SignupForm isLoading={isSignup} signupHandler={signupHandler} />
          <View style={styles.loginBtnWrapper}>
            <Text style={styles.loginBtnText}>Already a member? </Text>
            <Button
              style={styles.loginBtn}
              labelStyle={styles.loginBtnLabel}
              onPress={goToLogin}
              variant="tertiary"
            >
              <Text style={styles.loginBtnLabel}>Login</Text>
            </Button>
          </View>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
