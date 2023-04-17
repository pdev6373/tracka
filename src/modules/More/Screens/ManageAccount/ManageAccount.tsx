import React, { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { ScrollView, SafeAreaView, StatusBar, View, Platform } from "react-native";
import { primaryColors } from "../../../../styles/Colors";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import { TextField } from "../../../../components/Input";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import SelectInput from "../../../../components/Input/SelectInput";
import routes from "../../../../routes";
import styles from "./manageaccountstyles";
import {Picker} from '@react-native-picker/picker';
import { Controller, useForm, useWatch } from "react-hook-form";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import PickerInput from "../../../../components/Input/PickerInput/PickerInput";
import { requiredRules } from "../../../Auth/utils";
import useAuthContext from "../../../Auth/hooks/useAuthContext";


export default function ManageAccount({ navigation }: { navigation: any }) {
  const { preference } = useSetupContext();

  const { user } = useAuthContext();

  console.log(user?.firstName, user?.lastName)
  

  const navigateToPasswordReset = () =>
    navigation.navigate(routes.passwordReset);
    const {
      control,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      defaultValues: {
        community: preference.community,
        lga: preference.lga,
        state: preference.state,
      },
    });

  const stateOption = watch("state");


    const states = NaijaStates.states().map((s: string) => ({
      value: s,
      label: s,
    }));

    const lgaSelectOptions = stateOption
    ? NaijaStates.lgas(stateOption)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <SimpleHeader heading="Manage Account" />
        <View style={styles.contentWrapper}>
          <View style={styles.input}>
            <TextField disabled label="Last name" value={user?.lastName} />
          </View>
          <View style={styles.input}>
            <TextField disabled label="First name" value={user?.firstName}/>
          </View>
          <View style={styles.input}>
            <TextField disabled label="Email" value={user?.email}/>
          </View>
          <View style={styles.input}>
            <TextField label="Community" value={preference.community} />
          </View>
          <View style={styles.input}>
            <Controller
              control={control}
              name="lga"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <>
                {
            Platform.OS === "ios" ? 
            <PickerInput 
            label="State"
            onValueChange={onChange}
            data={states}
            selectedValue={value}
             />

          :
            
            <SelectInput
            errors={errors.lga?.message}
            variant="secondary"
            onValueChange={onChange}
            selectedValue={value}
            label="State"
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
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <>
                {
            Platform.OS === "ios" ? 
            <PickerInput 
            label="L.G.A"
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
            label="L.G.A"
            data={lgaSelectOptions}
          />}
              </>
              )}
            />
          </View>
          <View style={styles.passwordBtnWrapper}>
            <Button
              style={styles.passwordBtn}
              label="Change password"
              variant="tertiary"
              onPress={navigateToPasswordReset}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
