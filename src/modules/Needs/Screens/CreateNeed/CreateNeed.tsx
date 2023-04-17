import React, { useEffect, useState } from "react";
import { Platform, KeyboardAvoidingView, Alert } from "react-native";
import NaijaStates from "naija-state-local-government";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Text,
  StatusBar,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Box, ScrollView } from "native-base";
import { Back } from "../../../../components/Vectors";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";
import styles from "./createneedstyles";
import { primaryColors } from "../../../../styles/Colors";
import { TextField } from "../../../../components/Input";
import { TextFieldVariant } from "../../../../components/Input/TextField/types";
import { useNeedsCategory } from "../../hooks/query/useNeeds";
import SelectInput from "../../../../components/Input/SelectInput/SelectInput";
import TextAreaComponent from "../../../../components/Input/TextArea";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import { useCreateNeed } from "../../hooks/mutations/useNeeds";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import Toast from "react-native-toast-message";
import routes from "../../../../routes";
import { NeedMutation } from "../../../../types";
import PickerInput from "../../../../components/Input/PickerInput/PickerInput";
import { SelectDropdown } from "../../../../components/Input/Select/Select";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "../../../../components/Input/DropDownInput/DropDownInput";

type ProjectsProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const states = NaijaStates.states().map((s: string) => ({
  value: s,
  label: s,
}));

export const requiredRules = {
  required: { value: true, message: "Required *" },
};

const CreateNeed = (props: ProjectsProps) => {
  const statusBarHeight = getStatusBarHeight();

  const { preference } = useSetupContext();

  const { data: categories } = useNeedsCategory();
  const {
    mutate: createNeedFunc,
    isLoading: creatingNeed,
    error,
  } = useCreateNeed();

  if (error) {
    Alert.alert(
      "Something went wrong. Please try again, and make sure you are connected to the internet."
    );
  }

  const needCategories = !!categories
    ? categories?.map((category) => ({
        value: category?.id,
        label: category?.name,
      }))
    : [];

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<NeedMutation>({
    defaultValues: {
      community: preference.community,
      lga: preference.lga,
      state: preference.state,
    },
  });

  const stateOption = watch("state");

  const lgaSelectOptions = stateOption.value
    ? NaijaStates.lgas(stateOption?.value)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  const submitHandler = (formInput: NeedMutation) => {
    createNeedFunc(
      {
        title: formInput?.title,
        name: formInput?.community,
        categoryId: formInput?.category?.value,
        state: formInput?.state?.value?.toLowerCase(),
        lga: formInput?.lga?.value?.toLowerCase(),
        description: formInput?.description,
      },
      {
        onError: (error: any) => {
          Toast.show({
            type: "error",
            text1: error?.message || "Could not create need at this time",
          });
        },
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "Community need created",
            text2: "Need would be accessed and approved by admin",
          });
          props.navigation.navigate(routes.need);
        },
      }
    );
  };

  const navigateBack = () => props.navigation.goBack();
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.white}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <Box
          style={[
            styles.wrapper,
            {
              paddingTop: statusBarHeight + 16,
              height: scale(statusBarHeight + 58),
            },
          ]}
        >
          <>
            <TouchableWithoutFeedback onPress={navigateBack}>
              <View>
                <Back width={24} height={24} fill={primaryColors.neutral_2} />
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.heading}>Submit a Community Need</Text>
          </>
        </Box>
        <View style={styles.form}>
          <Text style={styles.lead}>
            If you were unable to find and vote your need, Submit a need you
            want the government to fund in your community.
          </Text>
          <View style={styles.input}>
            <Controller
              rules={requiredRules}
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  label="Title of Need"
                  value={value}
                  errors={errors?.title?.message}
                />
              )}
            />
          </View>
          <View style={styles.input}>
            <Controller
              rules={requiredRules}
              control={control}
              name="category"
              render={({ field: { onChange, value } }) => (
                <DropdownComponent
                  data={needCategories}
                  label="Category of Need"
                  onChange={onChange}
                  placeHolder="Select a Category"
                  value={value}
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <Controller
              rules={requiredRules}
              control={control}
              name="community"
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Community"
                  errors={errors?.community?.message}
                />
              )}
            />
          </View>
          <View style={styles.input}>
            <Controller
              control={control}
              name="state"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <DropdownComponent
                  data={states}
                  label="State"
                  onChange={onChange}
                  placeHolder="Select a State"
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.input}>
            <Controller
              control={control}
              name="lga"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <DropdownComponent
                  data={lgaSelectOptions}
                  label="L.G.A"
                  onChange={onChange}
                  placeHolder="Select a L.G.A"
                  value={value}
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <Controller
              rules={requiredRules}
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <TextAreaComponent
                  onTextChange={onChange}
                  value={value}
                  label="Description"
                  totalLines={10}
                  errors={errors?.description?.message}
                />
              )}
            />
          </View>
          <View>
            <Text style={styles.info}>
              Can’t find your need? Contact Support by Clicking Here
            </Text>
            <View style={styles.btnWrapper}>
              <Button
                disabled={creatingNeed}
                onPress={handleSubmit(submitHandler)}
                variant="primary"
                label="Submit"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNeed;

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    // height: 60,
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});
