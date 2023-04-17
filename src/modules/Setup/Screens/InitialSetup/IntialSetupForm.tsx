import React, { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import NaijaStates from "naija-state-local-government";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "../../../../components/Input";
import { TextFieldVariant } from "../../../../components/Input/TextField/types";
import { requiredRules } from "../../../Auth/utils";
import SelectInput from "../../../../components/Input/SelectInput";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import styles from './initialsetupstyles';
import {Picker} from '@react-native-picker/picker';
import PickerInput from "../../../../components/Input/PickerInput/PickerInput";


export interface FormData {
  firstName: string;
  lastName: string;
  community: string;
  state: string;
  lga: string;
}

const states = NaijaStates.states().map((s: string) => ({
  value: s,
  label: s,
}));


export default function InitialSetupForm({
  defaultValues,
  submitHandler,
}: {
  defaultValues: FormData;
  submitHandler: (params: FormData) => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    defaultValues,
  });

  const state = watch("state");

  const lgaSelectOptions = state
    ? NaijaStates.lgas(state)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="firstName"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
            <TextField
              disabled={!!defaultValues.firstName}
              errors={errors.firstName?.message}
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="First name"
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="lastName"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
            <TextField
              disabled={!!defaultValues.lastName}
              errors={errors.lastName?.message}
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Last name"
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="community"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
            <TextField
              errors={errors.community?.message}
              variant={TextFieldVariant.Primary}
              onChangeText={onChange}
              value={value}
              label="Community"
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="state"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
           <>
            {
              Platform.OS === "ios" ? 
              <PickerInput 
              label="Select State"
              onValueChange={onChange}
              data={states}
              selectedValue={value}
               />

            :
              
              <SelectInput
              errors={errors.state?.message}
              variant="secondary"
              onValueChange={onChange}
              selectedValue={value}
              label="Select state"
              data={states}
            />}
           </> 

          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name="lga"
          rules={{ ...requiredRules }}
          render={({ field: { onChange, value } }) => (
            <>
            {
               Platform.OS === "ios" ? 
               <PickerInput 
               label="Select State"
               onValueChange={onChange}
               data={lgaSelectOptions}
               selectedValue={value}
                />
              
            :
            <SelectInput
            errors={errors.lga?.message}
            variant="secondary"
            onValueChange={onChange}
            selectedValue={value}
            label="Select L.G.A"
            data={lgaSelectOptions}
          />
            }
            </>
         
          )}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button
          label="Continue"
          onPress={handleSubmit(submitHandler)}
          variant="primary"
        />
      </View>
    </View>
  );
}
