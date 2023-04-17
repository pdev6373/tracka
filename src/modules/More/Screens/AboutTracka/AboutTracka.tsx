import React from "react";
import { ScrollView, SafeAreaView, StatusBar, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import { primaryColors } from "../../../../styles/Colors";
import { Budgit } from "../../../../components/Vectors";
import * as WebBrowser from "expo-web-browser";
import styles from "./abouttrackastyles";

export default function AboutTracka() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <SimpleHeader heading="About TrackaMobile App 2.0" />
        <View style={styles.wrapper}>
          <Text style={styles.heading}>TrackaMobile 2.0</Text>
          <Text style={styles.content}>
          The Tracka Mobile 2.0 Application is an initiative of BudgIT with support from Strengthening Civic Advocacy and Local Engagement (SCALE) Project, funded by USAID Nigeria to provide everyday citizens with access to public finance management data for engagement with public institutions and public office holders on prudent management of national resources for improved service delivery.

          Tracka Mobile app 2.0. is supported with data from:
          www.tracka.ng
          www.openstates.ng
          www.me.yourbudgit.com
          www.govspend.ng

          This mobile app is made possible by the generous support of the American people through the United States Agency for International Development (USAID). The contents are the responsibility of BudgIT Foundation and do not necessarily reflect the views of USAID or the U.S. Government.

          </Text>
          <View>
            <Text style={styles.content}>
              TrackaMobile 2.0 is supported with data from
            </Text>
            <TouchableWithoutFeedback
              onPress={() =>
                WebBrowser.openBrowserAsync("https://openstates.ng/")
              }
            >
              <Text style={styles.link}>www.openstates.ng</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => WebBrowser.openBrowserAsync("https://tracka.ng/")}
            >
              <Text style={styles.link}>www.tracka.ng</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                WebBrowser.openBrowserAsync("https://me.yourbudgit.com/login")
              }
            >
              <Text style={styles.link}>www.me.yourbudgit.com</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.footer}>
            <Text style={styles.outro}>
            This mobile app is made possible by the generous support of the American people through the United States Agency for International Development (USAID). The contents are the responsibility of BudgIT Foundation and do not necessarily reflect the views of USAID or the U.S. Government.
            </Text>
            <Text style={styles.leadOutro}>Powered by</Text>
            <Budgit />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
