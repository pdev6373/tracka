import React from "react";
import { Text, Box } from "native-base";

type HeaderProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const Header = (props: HeaderProps) => {
  const { isFormComplete, handleSubmit, navigation } = props;

  const handleSubmission = () => {
    // if(!isFormComplete) {
    //   return;
    // }
    //show notification modal
    navigation.navigate("NotificationsPermission");
  };

  return (
    <Box
      width="100%"
      height={16}
      background="white.white"
      justifyContent="center"
    >
      <Text
        textAlign="right"
        color={isFormComplete ? "primary.500" : "neutral.300"}
        fontSize="md"
        marginRight={5}
        onPress={handleSubmission}
      >
        Continue
      </Text>
    </Box>
  );
};

export default Header;
