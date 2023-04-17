import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button, Modal, Text } from "native-base";

type CustomModalProps = {
  isModalOpen: boolean;
  closeModal: (event: GestureResponderEvent) => void;
  submitModal: (event: GestureResponderEvent) => void;
  cancelText: string;
  submitText: string;
  headerText: string;
  bodyText: string;
};

const CustomModal = (props: CustomModalProps) => {
  const {
    isModalOpen,
    closeModal,
    submitModal,
    cancelText,
    submitText,
    headerText,
    bodyText,
  } = props;

  return (
    <Modal
      size="lg"
      isOpen={isModalOpen}
      onClose={closeModal}
      _backdrop={{
        _dark: {
          bg: "coolGray.800",
        },
        bg: "warmGray.50",
      }}
      closeOnOverlayClick={false}
      shadow={6}
    >
      <Modal.Content
        flex={2}
        background="white.white"
        maxWidth="350"
        width="90%"
        maxH={260}
      >
        <Modal.Body>
          <Text
            fontSize="md"
            color="grey.900"
            letterSpacing={1}
            fontWeight={400}
            mb={5}
            mt={7}
            marginLeft={4}
          >
            {headerText}
          </Text>
          <Text fontSize="sm" marginLeft={4}>
            {bodyText}
          </Text>
        </Modal.Body>

        <Modal.Footer background="white.white">
          <Button.Group space={2}>
            <Button
              variant="ghost"
              color="neutral.500"
              fontSize="sm"
              onPress={closeModal}
            >
              {cancelText}
            </Button>
            <Button
              variant="ghost"
              color="primary.500"
              fontSize="sm"
              onPress={submitModal}
            >
              {submitText}
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default CustomModal;
