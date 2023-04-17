import React from "react";
import { ScrollView, SafeAreaView, StatusBar, View, Text } from "react-native";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import { primaryColors } from "../../../../styles/Colors";
import styles from "./termsandconditionstyle";

export default function TermsAndConditions() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <SimpleHeader heading="Terms and Conditions" />
        <View style={styles.wrapper}>
          <Text style={styles.title}>General Information</Text>
          <Text style={styles.content}>These terms and conditions apply to you, the user of this application, and BudgIT Foundation (the Owner), the Owner and operator of the following application: TrackaMobile 2.0 (the "Application").</Text>

          <Text style={styles.title}>1. About this Application</Text>
          <Text>This Application consists of various pages operated by BudgIT Foundation. This Service is offered to you upon your acceptance of the Terms, conditions, notices hereinafter contained. Your use of this Service constitutes your agreement to all the Terms contained herein.</Text>
          {/* 2 */}
          <Text style={styles.title}>2. Agreement</Text>
          <Text style={styles.content}>a. By using this Application, you acknowledge that you have reviewed, considered the Terms of this Agreement and understand the same and agree to be bound by it. If you do not agree with these Terms or do not intend to be bound by it, you must quit the use of this Application immediately. In addition, when using these Services, You shall be subject to any posted guidelines or rules applicable to such services. Accordingly, any participation in this Service shall constitute acceptance of this Agreement</Text>
          <Text style={styles.content}>b. By using this Application and agreeing to these Terms, you represent and warrant that you have the legal capacity to accept these Terms.</Text>
          {/* 3 */}
          <Text style={styles.title}>3. Acceptable Use</Text>
          <Text style={styles.content}>a. We hereby grant you the license to use our Service for your personal, non-commercial use to retrieve, display and view the content on this application.</Text>
          <Text style={styles.content}>b. The license created under these Terms is limited, non-exclusive, non-transferable and revocable.</Text>
          <Text style={styles.content}>c. You agree that you will not use the contents or Materials for any other purpose which may be contrary to your license to use this Service.</Text>
          <Text style={styles.content}>d. Any unauthorized use by you shall terminate the permission or license granted by this Application.</Text>
          {/* 4 */}
          <Text style={styles.title}>
          4. User Account
          </Text>
          <Text style={styles.content}>a. You may be required to register with us to have access to this application </Text>
          <Text style={styles.content}>b. You will be required to provide certain personal information, which includes but not limited to Your name, user name, email address and password. The information provided must be correct and accurate.</Text>
          <Text style={styles.content}>c. This personal information must not be disseminated to anyone and when you discover that your information has been compromised, you agree to notify us immediately. You also acknowledge that you are responsible for the security of your personal information and that the Owner does not accept liability for the security of your account as you agree to be responsible for maintaining the confidentiality of your passwords or other account identifiers which you choose and all activities under your account.</Text>
          {/* 5 */}
          <Text style={styles.title}>5. Privacy Policy</Text>
          <Text style={styles.content}> a. To use our Service, we require that You provide certain personal information, By using our Service, you hereby grant the Owner the authority to use your personal information to share other relevant information with you..</Text>
          <Text>b. The Owner reserves the right to terminate your account where You have provided false inaccurate or incorrect information or inciting violence or false accusation via this application.</Text>
          <Text style={styles.content}>c. It is at the sole discretion of the Owner to terminate the account or refuse to provide Service to any User at any time and for any reason.</Text>
          {/* 6 */}
          <Text style={styles.title}>6. Termination/Restriction of Access</Text>
          <Text style={styles.content}>The Owner reserves the right to, at its sole discretion, terminate Your access to this Application and the related Service or any part thereof at any time, for any reason and without notice.</Text>
          <Text style={styles.content}>The Owner shall have the right to terminate or terminate/suspend Your account for violating the Terms of this Service.</Text>
          <Text>If you register with us, you may terminate this Service at any time by issuing a prior notice to us. Once this is done, you will no longer be bound by the provisions of this Terms.</Text>
          {/* 7 */}
          <Text style={styles.title}>7. General Provisions</Text>
          <Text style={styles.content}>
          a. <Text style={styles.title}>Assignment</Text>: The Owner shall be permitted to assign, transfer its rights and/or obligations under these Terms. However, you shall not be permitted to assign, transfer any rights and/or obligations under these Terms.
          </Text>

          <Text style={styles.content}>
          b. <Text style={styles.title}>Entire Agreement</Text>: These Terms, disclaimers and any other agreement relating to the use of this Application constitutes the entire agreement and shall supersede any other agreement.
          </Text>
           <Text style={styles.content}>
           c. <Text style={styles.title}>Separate Agreements</Text> : You may have other legal agreements with us. Those agreements are separate from these Terms. These Terms are not intended to alter, amend, revise or replace the terms of the other agreement.
           </Text>
           <Text style={styles.content}>
           d. <Text style={styles.title}>Applicable law</Text>: These Terms may be governed and construed in accordance with the Laws, regulations or guidelines of the Federal Republic of Nigeria and other treaties, or regulations which are applicable in Nigeria.
           </Text>
           <Text style={styles.content}>
           e. <Text style={styles.title}>Variation</Text>: The Owner may revise these Terms at any time as it sees fit, and by using this Application, You undertake that You shall review the terms of the revised Terms before accepting the same. If any part of the Terms or any modification thereof is considered invalid or unenforceable, the remaining parts shall be considered valid and enforceable.
           </Text>
           <Text style={styles.content}>
            f. <Text style={styles.title}>Disclaimer</Text>: This mobile app is made possible by the generous support of the American people through the United States Agency for International Development (USAID). The contents are the responsibility of BudgIT Foundation and do not necessarily reflect the views of USAID or the U.S. Government.
           </Text>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
