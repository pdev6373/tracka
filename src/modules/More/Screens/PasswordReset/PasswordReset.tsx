import React from "react";
import { ScrollView, SafeAreaView, StatusBar, View, Text } from "react-native";
import { TextField } from "../../../../components/Input";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import { primaryColors } from "../../../../styles/Colors";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import styles from "./passwordresetstyles";

export default function PasswordReset() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <SimpleHeader heading="Reset Password" />
        <View style={styles.contentWrapper}>
          <Text style={styles.lead}>
            Enter a minimum of 8 characters. using alphanumeric letters only
          </Text>
          <View style={styles.formWrapper}>
            <View style={styles.input}>
              <TextField label="Old password" />
            </View>
            <View style={styles.input}>
              <TextField label="New password" />
            </View>
            <View style={styles.input}>
              <TextField label="Confirm new password" />
            </View>
            <View style={styles.btnWrapper}>
              <Button
                onPress={alert}
                variant="primary"
                label="Change Password"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
