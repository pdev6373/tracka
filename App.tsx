import 'expo-dev-client';
import React, { useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import * as Linking from 'expo-linking';
import { NavigationContainer } from "@react-navigation/native";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "@use-expo/font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";
import queryClient from "./src/lib/api/queryClient";
import Onboarding from "./src/modules/Onboarding/Onboarding";
import Login from "./src/modules/Auth/Login";
import Signup from "./src/modules/Auth/Signup";
import PasswordReset from "./src/modules/More/Screens/PasswordReset/PasswordReset";
import RetrievePassword from "./src/modules/Auth/RetrievePassword";
import ChangePassword from "./src/modules/Auth/ChangePassword";
import CheckEmail from "./src/Screens/CheckEmail";
import ReportProject from "./src/modules/Projects/Screens/ReportProject";
import TermsAndConditions from "./src/modules/More/Screens/TermsAndConditions";
import ManageAccount from "./src/modules/More/Screens/ManageAccount";
import Toast from "react-native-toast-message";
import Verification from "./src/modules/Auth/Verification";
import useAuthContext from "./src/modules/Auth/hooks/useAuthContext";
import AuthContextProvider from "./src/modules/Auth/Context/AuthContext";
import SetupContextProvider from "./src/modules/Setup/Context/SetupContext";
import InitialSetup from './src/modules/Setup/Screens/InitialSetup';
import Filter from "./src/Screens/Filter";
import NeedsFilter from "./src/Screens/NeedsFilter";

import Theme from "./src/utils/customTheme";
import routes from "./src/routes";
import {NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG} from "./src/constants/"
import InterestedNeedsNavigation from "./src/modules/InterestedNeeds/InterestedNeedsNavigation/InterestedNeedsNavigation"
import MainBottomNavigation from "./src/Navigation/MainBottomNavigation";
import CreateNeed from "./src/modules/Needs/Screens/CreateNeed";
import AboutTheApp from "./src/modules/More/Screens/AboutTheApp";
import AboutTracka from "./src/modules/More/Screens/AboutTracka";
import LogOut from "./src/modules/More/Screens/LogOut";
import useSetupContext from "./src/modules/Setup/hooks/useSetupContext";
import ProjectDetails from "./src/modules/Projects/Screens/ProjectDetails";
import registerNNPushToken, {getPushDataObject} from 'native-notify';
import SettingsNavigation from "./src/modules/Settings/SettingsNavigation";
import SupportNavigation from "./src/modules/Support/SupportNavigation/SupportNavigation";
import InteresrNavigation from "./src/modules/InterestedProjects/InterestedProjectsNavigation/InterestedProjectsNavigation";
import { Text } from "react-native";
import requestUserPNPermission from './src/lib/api/helpers/fcm';

const MainStack = createNativeStackNavigator();

const customFonts = {
  Roboto_Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
  Roboto_Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
  Roboto_Bold: require("./src/assets/fonts/Roboto-Bold.ttf"),
};

const AppComponent = () => {
  SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch((error)=>{
    console.log(error);
  }); 
  
  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 2000);
  const prefix = Linking.createURL('https://trackmobile-push-notification.web.app');

  requestUserPNPermission()

  const [linkData, setLinkData] = React.useState(null)
  const url = Linking.useURL();
  console.log(url, "UrL...-_")

 console.log("=-----LinkData", linkData)
  const handleDeepLink = async (event:any) =>{
    let data = Linking.parse(event.url)
    setLinkData(data)

  }

  React.useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);

    async function getInitialURL () {
      const initialURL: any = Linking.getInitialURL();
      if (initialURL) {
        setLinkData(Linking.parse(initialURL));
      }
    }

    if (!linkData) getInitialURL()

    return () => {
      Linking.removeEventListener("url", handleDeepLink)
    }
  }, [])

  const linking =  {
    prefixes: [prefix],
    config: {
      screens: {
        projectDetails: "details/:id?",
        app: {
          screens: {
            Projects: "Projects/:id?",
            // Need: "Need", 
            // Allocation: "Allocation",
            // projectDetails: "projectDetails?id"
          }
        }
      }
    }
  };

  const theme = extendTheme(Theme);
  const [isLoaded] = useFonts(customFonts);

  const authState = useAuthContext();
  const setupState = useSetupContext();


  if (!isLoaded) {
    return null;
  }

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer
      linking={linking} fallback={<Text>Loading...</Text>}
      >
        <NativeBaseProvider theme={theme}>
          <StatusBar style="dark" />
          <MainStack.Navigator screenOptions={screenOptions}>
            {/*  */}
            {/* Onboarding */}

            {/* Auth */}
            {/*
          <Stack.Screens name='VerifyEmail' component={VerifyEmailScreen} />
          <Stack.Screens name='PersonalInformation' options={{ header: () => null }} component={PersonalInformationScreen} />
          <Stack.Screens name='NotificationsPermission' options={{ header: () => null }} component={NotificationsPermissionScreen} />

        */}
            {authState.isAuthenticated && (
              <>
                {setupState.isSetup && (
                  <MainStack.Screen
                    name={routes.intialSetup}
                    component={InitialSetup}
                  />
                )}
                <MainStack.Screen
                  name={routes.app}
                  component={MainBottomNavigation}
                />
              </>
            )}

            <MainStack.Group screenOptions={{ presentation: "modal" }}>
              {!authState.isAuthenticated && (
                <>
                  {!setupState.isOnboarded && (
                    <MainStack.Screen
                      name={routes.onBoarding}
                      component={Onboarding}
                    />
                  )}
                  <MainStack.Screen name={routes.login} component={Login} />
                  <MainStack.Screen
                    name={routes.retrievePassword}
                    component={RetrievePassword}
                  />
                  <MainStack.Screen name={routes.signup} component={Signup} />
                  <MainStack.Screen
                    name={routes.verification}
                    component={Verification}
                  />
                  <MainStack.Screen
                    name={routes.changePassword}
                    component={ChangePassword}
                  />
                </>
              )}

              {authState.isAuthenticated && (
                <>
                  <MainStack.Screen name={routes.filter} component={Filter} />
                  <MainStack.Screen name={routes.needsFilter} component={NeedsFilter} />
                  <MainStack.Screen
                    name={routes.createNeed}
                    component={CreateNeed}
                  />
                  <MainStack.Screen
                    name={routes.manageAccount}
                    component={ManageAccount}
                  />
                  <MainStack.Screen
                    name={routes.passwordReset}
                    component={PasswordReset}
                  />
                  <MainStack.Screen
                    name={routes.settings}
                    component={SettingsNavigation}
                  />
                  <MainStack.Screen
                    name={routes.support}
                    component={SupportNavigation}
                  />
                  <MainStack.Screen
                    name={routes.interestedProject}
                    component={InteresrNavigation}
                  />
                  <MainStack.Screen
                    name={routes.interestedNeeds}
                    component={InterestedNeedsNavigation}
                  />
                  <MainStack.Screen
                    name={routes.about}
                    component={AboutTheApp}
                  />
                  <MainStack.Screen
                    name={routes.termsAndConditions}
                    component={TermsAndConditions}
                  />
                  <MainStack.Screen
                    name={routes.aboutTracka}
                    component={AboutTracka}
                  />
                  <MainStack.Screen
                    name={routes.projectDetails}
                    component={ProjectDetails}
                  />
                  <MainStack.Screen
                    name={routes.reportProject}
                    component={ReportProject}
                  />
                  <MainStack.Screen name={routes.logout} component={LogOut} />
                </>
              )}
              <MainStack.Screen
                name={routes.checkEmail}
                component={CheckEmail}
              />
            </MainStack.Group>
          </MainStack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
      <Toast onPress={() => Toast.hide()} visibilityTime={10000} type="info" />
    </SafeAreaView>
  );
};

export default function App() {
 
  registerNNPushToken(NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SetupContextProvider>
          <AppComponent />
        </SetupContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
