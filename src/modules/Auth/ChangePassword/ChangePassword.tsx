import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Image } from "native-base";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";
import { Back } from "../../../components/Vectors";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import styles from "./changepasswordstyles";
import { primaryColors } from "../../../styles/Colors";
import { TextFieldVariant } from "../../../components/Input/TextField/types";
import { requiredRules, passwordRules } from "../utils";
import { TextField, PasswordField } from "../../../components/Input";
import { usePasswordReset } from "../hooks/Mutation/useAuthMutation";
import formatErrorMessage from "../../../utils/formatErrorMessage";
import routes from "../../../routes";

interface FormParams {
  password: string;
  confirm_password: string;
  code: string;
}
const passwordIcon = require("../../../assets/lock.png");

const statusBarHeight = getStatusBarHeight();

const ChangePassword = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { email } = route.params;
  const { mutate: resetPassword, isLoading } = usePasswordReset();

  const goBack = () => navigation.goBack();

  const submitHandler = (params: FormParams) => {
    resetPassword(
      {
        email,
        password: params?.password.trim(),
        code: params.code.trim(),
      },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "Password Changed. Please log in",
          });
          navigation.navigate(routes.login, {
            email,
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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormParams>();

  const passwordValue = watch("password");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, { paddingTop: statusBarHeight }]}>
          <Button style={styles.backBtn} onPress={goBack} variant="tertiary">
            <Back height={30} fill={primaryColors.lightBlue} width={30} />
          </Button>
        </View>
        <View style={styles.detailSection}>
          <Image source={passwordIcon} alt="check email icon" />
          <Text style={styles.detailSectionHeading}>Create password</Text>
          <Text style={styles.detailSectionLead}>
            Please choose a password different from the previously used
            password.
          </Text>
          <Text style={styles.subLead}>
            Check your email for a four-digit code
          </Text>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name="password"
              rules={{ ...requiredRules, ...passwordRules }}
              render={({ field: { onChange, value } }) => (
                <PasswordField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="New Password"
                  errors={errors.password?.message}
                />
              )}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              name="confirm_password"
              rules={{
                ...requiredRules,
                validate: (value) => {
                  if (value !== passwordValue) {
                    return "Password does not match";
                  }
                  return true;
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PasswordField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Confirm Password"
                  errors={errors.confirm_password?.message}
                />
              )}
            />
          </View>
          <View>
            <Controller
              control={control}
              name="code"
              rules={{ ...requiredRules }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Code (from email)"
                  errors={errors.code?.message}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            disabled={isLoading}
            onPress={handleSubmit(submitHandler)}
            label="Reset password"
            variant="primary"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ChangePassword;
