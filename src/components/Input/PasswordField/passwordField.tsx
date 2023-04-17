import React, { useState } from "react";
import { Pressable } from "react-native";
import { TextField } from "..";
import { VisibilityOff, VisibilityOn } from "../../Vectors";
import { TextFieldProps } from "../TextField/TextField";

export default function PasswordField(props: TextFieldProps) {
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const toggleSecureEntry = () => setSecureEntry((prev) => !prev);

  const suffix = (
    <Pressable onPress={toggleSecureEntry}>
      <>
        {!secureEntry && <VisibilityOn />}
        {secureEntry && <VisibilityOff />}
      </>
    </Pressable>
  );
  return <TextField {...props} secureTextEntry={secureEntry} suffix={suffix} />;
}
