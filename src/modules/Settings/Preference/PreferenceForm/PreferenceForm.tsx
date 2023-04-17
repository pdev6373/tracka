import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NaijaStates from "naija-state-local-government";
import { Box } from "native-base";
import { primaryColors } from "../../../../styles/Colors";
import Styles from "../preferencestyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import DropdownComponent from "../../../../components/Input/DropDownInput/DropDownInput";

export interface FormData {
  state: string;
  lga: string;
  community: string;
}

interface PrefForm {
  showMore: boolean;
  submitHandler: (params: FormData) => void;
  setShowMore: any;
}

export const requiredRules = {
  required: { value: true, message: "Required *" },
};

const styles = {
  selectStyle: {
    paddingLeft: 5,
    fontSize: 14,
    color: "neutral.500",
    borderRadius: 8,
    marginBottom: 6,
    mt: 1,
    width: "48%",
    borderColor: "primary.50",
    bg: "primary.50",
  },
};

const PreferenceForm = ({ showMore, submitHandler, setShowMore }: PrefForm) => {
  const { preference } = useSetupContext();
  const { preference: preference2 } = useSetupContext();

  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      lga: preference.lga,
      state: preference.state,
    },
  });

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    watch: watch2,
  } = useForm<FormData>({
    defaultValues: {
      lga: preference2.lga,
      state: preference2.state,
    },
  });

  const states = NaijaStates.states().map((s: string) => ({
    value: s,
    label: s,
  }));

  const states2 = NaijaStates.states().map((s: string) => ({
    value: s,
    label: s,
  }));

  const stateOption = watch("state");
  const stateOption2 = watch2("state");

  const lgaSelectOptions = stateOption.value
    ? NaijaStates.lgas(stateOption?.value)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  const lgaSelectOptions2 = stateOption2.value
    ? NaijaStates.lgas(stateOption2?.value)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.form}>
        <View style={Styles.input}>
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
        <View style={Styles.input}>
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
        {/* Delete button */}
        <View style={Styles.btnWrapper}>
          <Button
            label="Save"
            onPress={handleSubmit(submitHandler)}
            variant="primary"
          />
        </View>
        <Box style={Styles.select}>
          <TouchableOpacity style={Styles.deleteButton}>
            <MaterialIcons
              name="delete"
              size={24}
              color={primaryColors.red_light}
            />
            <Text style={{ color: primaryColors.red_light }}>Delete</Text>
          </TouchableOpacity>
        </Box>
      </View>

      {/* More form */}
      {showMore && (
        <View style={Styles.form}>
          <View style={Styles.input}>
            <Controller
              control={control2}
              name="state"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <DropdownComponent
                  data={states2}
                  label="State"
                  onChange={onChange}
                  placeHolder="Select a State"
                  value={value}
                />
              )}
            />
          </View>
          <View style={Styles.input}>
            <Controller
              control={control2}
              name="lga"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <DropdownComponent
                  data={lgaSelectOptions2}
                  label="L.G.A"
                  onChange={onChange}
                  placeHolder="Select a L.G.A"
                  value={value}
                />
              )}
            />
          </View>
          {/* Delete button */}
          <View style={Styles.btnWrapper}>
            <Button
              label="Save"
              onPress={handleSubmit2(submitHandler)}
              variant="primary"
            />
          </View>
          <Box style={Styles.select}>
            <TouchableOpacity
              style={Styles.deleteButton}
              onPress={() => setShowMore()}
            >
              <MaterialIcons
                name="delete"
                size={24}
                color={primaryColors.red_light}
              />
              <Text style={{ color: primaryColors.red_light }}>Delete</Text>
            </TouchableOpacity>
          </Box>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PreferenceForm;
