import { ScrollView } from "native-base";
import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import routes from "../../../../routes";
import { primaryColors } from "../../../../styles/Colors";
import useSetupContext from "../../hooks/useSetupContext";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styles from "./initialsetupstyles";
import { scale } from "react-native-size-matters";
import InitialSetupForm from "./IntialSetupForm";
import { FormData } from "./IntialSetupForm";
import useAuthContext from "../../../Auth/hooks/useAuthContext";

const statusBarHeight = getStatusBarHeight();

export default function InitialSetup(props: { navigation: any }) {
  const { isSetup, setPreferences } = useSetupContext();
  const { user } = useAuthContext();

  const defaultValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    state: "",
    community: "",
    lga: "",
  };

  const formSubmitHandler = (params: FormData) => {
    setPreferences({
      community: params.community.trim(),
      lga: params.lga.trim(),
      state: params.state.trim(),
    });
  };

  useEffect(() => {
    if (isSetup) {
      props.navigation.navigate(routes.app);
    }
  }, [isSetup, props.navigation]);

  return (
    <SafeAreaView>
      {!isSetup && (
        <ScrollView>
          <StatusBar
            animated={true}
            backgroundColor={primaryColors.backgroundColor}
            barStyle="dark-content"
            showHideTransition="fade"
          />
          <View
            style={[
              styles.contentWrapper,
              { paddingTop: scale(statusBarHeight) },
            ]}
          >
            <Text style={styles.lead}>
              Welcome. Please We need some information to personalized your
              experience
            </Text>
            <InitialSetupForm
              submitHandler={formSubmitHandler}
              defaultValues={defaultValues}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
