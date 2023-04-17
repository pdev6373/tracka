import React from "react";
import { Button } from "native-base";

type ProjectStatusButtonProp = {
  status: string;
  label: string;
};

const ProjectStatusButton = (props: ProjectStatusButtonProp) => {
  const { status, label } = props;

  return (
    <Button
      size={"sm"}
      paddingLeft={3}
      paddingRight={3}
      paddingTop={1}
      paddingBottom={1}
      position="relative"
      top={-43}
      left={4}
      width="30%"
      borderRadius={24}
      variant="solid"
      backgroundColor="white.white"
      borderColor="white.white"
      fontFamily="roboto"
      _text={{
        color:
          status === "in_progress"
            ? "warning.600"
            : status === "completed"
            ? "success.700"
            : "random.purple",
        fontSize: 14,
      }}
    >
      {label}
    </Button>
  );
};

export default ProjectStatusButton;
