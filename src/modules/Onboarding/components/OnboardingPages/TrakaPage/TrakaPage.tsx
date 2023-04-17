import React, { useEffect } from "react";
import { View, Text , Image} from "react-native";
import FadeInAndOut from "../../../../../components/FadeInAndOut";
import { Budgit } from "../../../../../components/Vectors";
import styles from "./trakapagestyle";
import style from "./trakapagestyle";

export default function TrakaPage({
  handlePageChange,
}: {
  handlePageChange: (p: number) => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => handlePageChange(1), 13000);

    return () => clearTimeout(timeout);
  }, [handlePageChange]);

  return (
    <View style={style.container}>
      <Image
        alt="bugit logo"
        style={style.image}
        resizeMode="cover"
        source={require("../../../../../assets/splash.png")}
      />
      <View style={style.animationWrapper}>
          <FadeInAndOut
            outDuration={1000}
            style={style.animation}
            duration={4000}
          >
            <View>
              <Text style={style.lead}>
              This mobile app is made possible by the generous support of the American people through the United States Agency for International Development (USAID). The contents are the responsibility of BudgIT Foundation and do not necessarily reflect the views of USAID or the U.S. Government.
              </Text>
            </View>
          </FadeInAndOut>
        <FadeInAndOut
          outDuration={2000}
          style={style.animation}
          duration={4000}
          delay={5000}
        >
          <View >
            <View>
              <Text style={style.lead}>Powered by</Text>
              <View style={styles.icons}>
              <Image
              alt="USA logo"
              style={style.smallImages}
              resizeMode="cover"
              source={require("../../../../../assets/USAgencyforInternationalDevelopmentUSAID.jpg")}
              />
              <Budgit />
              <Image
              alt="SS logo"
              style={style.smallImages}
              resizeMode="cover"
              source={require("../../../../../assets/StrengtheningCivicAdvocacyAndLocalEngagement.png")}
              />
              </View>
            </View>
          </View>
        </FadeInAndOut>
      </View>
    </View>
  );
}
