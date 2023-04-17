import React from "react";
import { SafeAreaView } from "react-native";
import { Text, Box, Image } from "native-base";

type LoadingProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const Loading = (props: LoadingProps) => {
  const { isFormComplete, handleSubmit, navigation } = props;

  return (
    <SafeAreaView>
      {/* <Box flex={1} justifyContent='center' alignItems='center' background='white.white'> */}
      <Image
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white.white",
        }}
        source={require("../../assets/loader2.gif")}
      />
      {/* </Box> */}
    </SafeAreaView>
  );
};

export default Loading;
