import React, { useState } from "react";
import { SafeAreaView, Platform } from "react-native";
import { Text, Box, Progress } from "native-base";
import { Formik } from "formik";

import TextInput from "../../components/Input/TextInput";
import SelectInput from "../../components/Input/SelectInput/SelectInput";
import Header from "./Header";

type GetInfoProps = {
  navigation: any;
};

const stateData = [
  { label: "Anambra State", value: "anambra_state" },
  { label: "Ondo State", value: "ondo_state" },
];

const GetInfo = (props: GetInfoProps) => {
  const { navigation } = props;
  const [isFormComplete, setIsFormComplete] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        community: "",
        state: "",
        lga: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
          <Box mt={Platform.OS === "android" ? 8 : 0}>
            <Progress colorScheme="neutral" value={35} borderRadius={0} />
            <Header
              isFormComplete={isFormComplete}
              handleSubmit={handleSubmit}
              navigation={navigation}
            />
          </Box>
          <Box alignSelf="center" width="90%" flex={1} mt={8}>
            <Text
              textAlign="left"
              mb={10}
              color="neutral.500"
              letterSpacing={1}
            >
              We need some information to personalise your experience
            </Text>

            <TextInput
              placeholder="First name"
              size="2xl"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
            />

            <TextInput
              placeholder="Last name"
              size="2xl"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
            />

            <TextInput
              placeholder="Community"
              size="2xl"
              onChangeText={handleChange("community")}
              onBlur={handleBlur("community")}
              value={values.community}
            />

            <SelectInput
              accessibilityLabel="Select State"
              placeholder="Select State"
              data={stateData}
              styles={{
                paddingTop: 5,
                paddingLeft: 5,
                paddingBottom: 5,
                fontSize: 18,
                color:'neutral.500',
                borderRadius: 6,
                marginBottom: 6,
                mt: 1
              }}
            />

            <SelectInput
              accessibilityLabel="Select Local Government Area"
              placeholder="Select Local Government Area"
              data={stateData}
              styles={{
                paddingTop: 5,
                paddingLeft: 5,
                paddingBottom: 5,
                fontSize: 18,
                color: 'neutral.500',
                borderRadius: 6,
                marginBottom: 6,
                mt: 1
              }}
            />
          </Box>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default GetInfo;
