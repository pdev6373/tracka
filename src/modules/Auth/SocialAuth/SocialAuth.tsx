import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { HStack } from "native-base";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import { scale } from "react-native-size-matters";
import { Google, Facebook } from "../../../components/Vectors";
import useAuthContext from "../hooks/useAuthContext";

import styles from "./socialauthstyle";
import routes from "../../../routes";

export default function SocialLogin({ navigation }: { navigation: any }) {
  const { fbLogin, isAuthenticated, googleLoginHandler } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate(routes.app);
    }
  }, [isAuthenticated, navigation]);

  return (
    <HStack space={scale(8)} style={styles.socialAuthWrapper}>
      <Button
        onPress={googleLoginHandler}
        variant="primary"
        style={[styles.authBtn, styles.google]}
      >
        <View style={styles.authBtnContentWrapper}>
          <Google />
          <Text style={[styles.btnText, styles.googleText]}>Google</Text>
        </View>
      </Button>
      <Button
        onPress={fbLogin}
        variant="primary"
        style={[styles.authBtn, styles.facebook]}
      >
        <View style={styles.authBtnContentWrapper}>
          <Facebook />
          <Text style={[styles.btnText, styles.facebookText]}>Facebook</Text>
        </View>
      </Button>
    </HStack>
  );
}
