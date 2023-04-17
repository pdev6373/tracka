import React from "react";
import { View, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextField, PasswordField } from "../../../components/Input";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import { TextFieldVariant } from "../../../components/Input/TextField/types";
import { AuthParams } from "../../../types/Auth";
import styles from "./signupstyle";
import { requiredRules, emailRules, passwordRules } from "../utils";

interface FormData extends AuthParams {
  confirm_password: string;
}

export default function SignupForm({
  signupHandler,
  isLoading = false,
}: {
  signupHandler: (params: AuthParams) => void;
  isLoading: boolean;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const passwordValue = watch("password");

  const submitHandler = (data: FormData) => {
    signupHandler(data);
  };

  return (
    <ScrollView>
      <View style={styles.input}>
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
      <View style={styles.input}>
        <Controller
          control={control}
          name="firstName"
          rules={{ ...requiredRules, }}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="First Name"
              errors={errors.firstName?.message}
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="lastName"
          rules={{ ...requiredRules, }}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Last Name"
              errors={errors.lastName?.message}
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="password"
          rules={{ ...requiredRules, ...passwordRules }}
          render={({ field: { onChange, value } }) => (
            <PasswordField
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Password"
              errors={errors.password?.message}
            />
          )}
        />
      </View>
      <View style={styles.input}>
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
              errors={errors.confirm_password?.message}
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Confirm Password"
            />
          )}
        />
      </View>
      <View style={styles.formBtn}>
        <Button
          disabled={isLoading}
          variant="primary"
          label={isLoading ? "Signing up..." : "Sign up"}
          onPress={handleSubmit(submitHandler)}
        />
      </View>
    </ScrollView>
  );
}
