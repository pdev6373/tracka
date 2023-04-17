import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader";
import styles from "./preferencestyles";
import { ScrollView } from "native-base";
import { primaryColors } from "../../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import PreferenceForm from "./PreferenceForm/index";
import useSetupContext from "../../Setup/hooks/useSetupContext";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export interface FormData {
  state: string;
  lga: string;
}

export interface FormData2 {
  state2: string;
  lga2: string;
}

const Preference = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState<boolean>(false);
  const { preference, setPreferences } = useSetupContext();

  const formSubmitHandler = (params: FormData) => {
    setPreferences({
      community: preference.community.trim(),
      lga: params?.lga?.value?.trim(),
      state: params?.state?.value?.trim(),
    });

    Toast.show({
      type: "success",
      text1: "New Preference Created Successfully",
      visibilityTime: 1000,
    });
    navigation.goBack();
  };

  const formSubmitHandler2 = (params: FormData) => {
    setPreferences({
      community: preference.community.trim(),
      lga: params?.lga?.value?.trim(),
      state: params?.state?.value?.trim(),
    });

    Toast.show({
      type: "success",
      text1: "New Preference Created Successfully",
      visibilityTime: 1000,
    });
    navigation.goBack();
  };

  return (
    <>
      <SimpleHeader heading="Preference Managaer" />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Add up to 2 states you would like to get project, allocation and
          community needs updates.
        </Text>
        {/* Form */}
        <PreferenceForm
          submitHandler={formSubmitHandler}
          showMore={showMore}
          setShowMore={setShowMore}
        />
        {/* Add More Button */}
        {!showMore && (
          <TouchableOpacity
            onPress={() => setShowMore((prev) => !prev)}
            style={styles.addmore}
          >
            <Ionicons name="add-sharp" size={24} color={primaryColors.blue} />
            <Text style={{ color: primaryColors.blue }}>Add another state</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
};

export default Preference;
