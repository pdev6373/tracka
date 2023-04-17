import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import CountDown from "react-native-countdown-component";
import { Back } from "../../../components/Vectors";
import Button from "../../../components/Buttons/ButtonComponent/Button";
import styles from "./verificationstyle";
import { primaryColors } from "../../../styles/Colors";
import useAuthContext from "../hooks/useAuthContext";
import routes from "../../../routes";


const statusBarHeight = getStatusBarHeight();

const CELL_COUNT = 4;

const Verification = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState("");
  const [shouldResend, setShouldResend] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // @ts-ignore
  const renderCell = ({ index, symbol, isFocused }) => {
    return (
      <Text
        key={index}
        style={[styles.cell]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol ||
          (isFocused ? <Cursor delay={1000} cursorSymbol="_" /> : null)}
      </Text>
    );
  };

  const { verifyUserHandler, isVerified } = useAuthContext();

  useEffect(() => {
    if (isVerified) {
      navigation.navigate(routes.login);
    }
  }, [isVerified, navigation]);

  const verificationHandler = () => {
    verifyUserHandler(value);
  };

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <Button style={styles.backBtn} onPress={goBack} variant="tertiary">
          <Back height={30} fill={primaryColors.lightBlue} width={30} />
        </Button>
      </View>
      <View style={styles.codeSection}>
        <Text style={styles.codeSectionHeading}>4-digit code</Text>
        <Text style={styles.codeSectionLead}>
          Enter the code we sent to your email
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
      </View>
      <View>
        {/* {!shouldResend && (
          <View style={styles.countDown}>
            <Text style={styles.countDownText}>
              You can resend the code if it doesn’t arrive in
            </Text>
            <CountDown
              showSeparator={true}
              digitStyle={styles.digit}
              timeLabels={{}}
              timeToShow={["M", "S"]}
              onFinish={() => setShouldResend(true)}
              until={10}
            />
          </View>
        )}
        {shouldResend && (
          <View style={styles.countDown}>
            <Text style={styles.countDownText}>
              If you haven’t received the code yet
            </Text>
            <Button onPress={alert} variant="tertiary" label=" Resend Link" />
          </View>
        )} */}
        <View style={styles.btnWrapper}>
          <Button
            disabled={value.length !== CELL_COUNT}
            onPress={verificationHandler}
            label="Continue"
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
