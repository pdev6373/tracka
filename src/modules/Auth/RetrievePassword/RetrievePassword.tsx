import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Image } from "native-base";
import { Back } from "../../../components/Vectors";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import styles from "./retrievepasswordstyle";
import { primaryColors } from "../../../styles/Colors";
import { requiredRules, emailRules } from "../utils";
import { TextFieldVariant } from "../../../components/Input/TextField/types";
import routes from "../../../routes";
import { useRequestPasswordReset } from "../hooks/Mutation/useAuthMutation";
import Toast from "react-native-toast-message";
import formatErrorMessage from "../../../utils/formatErrorMessage";
import { TextField } from "../../../components/Input";

const lockIcon = require("../../../assets/lock.png");

const statusBarHeight = getStatusBarHeight();

const RetrievePassword = ({ navigation }: { navigation: any }) => {
  const { mutate: requestPasswordReset, isLoading } = useRequestPasswordReset();

  const goBack = () => navigation.goBack();
  const goToLogin = () => navigation.navigate(routes.login);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const submitHandler = (params: { email: string }) => {
    requestPasswordReset(
      { email: params.email.trim() },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "Please get the code from your email",
          });
          navigation.navigate(routes.changePassword, {
            email: params.email.trim(),
          });
        },
        onError: (error) => {
          Toast.show({
            type: "error",
            text1: formatErrorMessage(error.message),
          });
        },
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <Button style={styles.backBtn} onPress={goBack} variant="tertiary">
          <Back height={30} fill={primaryColors.lightBlue} width={30} />
        </Button>
      </View>
      <View style={styles.codeSection}>
        <Image source={lockIcon} alt="lock" />
        <Text style={styles.codeSectionHeading}>Forget Password</Text>
        <Text style={styles.codeSectionLead}>
          Enter your registered email below to receive password reset
          instructions
        </Text>
        <View>
          <Controller
            control={control}
            name="email"
            rules={{ ...requiredRules, ...emailRules }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant={TextFieldVariant.Primary}
                onChangeText={onChange}
                value={value}
                label="Email"
                errors={errors.email?.message}
              />
            )}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            disabled={isLoading}
            onPress={handleSubmit(submitHandler)}
            label={isLoading ? "Requesting password reset..." : "Continue"}
            variant="primary"
          />
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button onPress={goToLogin} variant="tertiary" label="Back to login" />
      </View>
    </SafeAreaView>
  );
};

export default RetrievePassword;
