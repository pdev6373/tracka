import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextField, PasswordField } from "../../../components/Input";
import { requiredRules, emailRules } from "../utils";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import { TextFieldVariant } from "../../../components/Input/TextField/types";
import styles from "./loginstyles";

interface FormData {
  email: string;
  password: string;
}
export default function LoginForm({
  login,
  isLoading = false,
  defaultValues,
}: {
  login: (value: FormData) => void;
  isLoading: boolean;
  defaultValues?: FormData;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  });

  const loginHandler = (value: FormData) => {
    login(value);
  };

  return (
    <View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="email"
          rules={{ ...requiredRules, ...emailRules }}
          render={({ field: { onChange, value } }) => (
            <TextField
              errors={errors.email?.message}
              autoFocus
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Email"
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="password"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
            <PasswordField
              errors={errors.password?.message}
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Password"
            />
          )}
        />
      </View>

      <View style={styles.formBtn}>
        <Button
          disabled={isLoading}
          onPress={handleSubmit(loginHandler)}
          variant="primary"
          label={isLoading ? "Logging in" : "Log in"}
        />
      </View>
    </View>
  );
}
