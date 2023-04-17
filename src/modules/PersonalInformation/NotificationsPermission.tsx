import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Text, Box } from "native-base";

import CustomModal from "../../components/Modal/Modal";

type NotificationsPermissionProps = {
  navigation: any;
};

const NotificationsPermission = (props: NotificationsPermissionProps) => {
  const { navigation } = props;

  const [isModalOpen, setIsModalOpen] = useState(true);

  const allowNotifications = () => {
    // code to allow notifications
    setIsModalOpen(false);
    navigation.navigate("Home");
  };

  const disAllowNotifications = () => {
    // code to disallow notifications
    setIsModalOpen(false);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "flex-start", padding: 14 }}>
      <Text
        fontSize="4xl"
        color="neutral.900"
        mt={10}
        marginLeft={5}
        marginRight={12}
      >
        Turn on notifications?
      </Text>
      <Text
        fontSize="xs"
        color="neutral.700"
        letterSpacing={1}
        mt={4}
        marginLeft={5}
        marginRight={4}
      >
        You will receive instant updates notification on projects you are
        interested in and also when you are around a particular project.
      </Text>

      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={disAllowNotifications}
        submitModal={allowNotifications}
        cancelText="DON'T ALLOW"
        submitText="ALLOW"
        headerText='"TrackaMobile 2.0" Would like to send you notifications'
        bodyText="Notifications may include alerts, sounds and icons badges. These can be configured in settings."
      />
    </SafeAreaView>
  );
};

export default NotificationsPermission;
