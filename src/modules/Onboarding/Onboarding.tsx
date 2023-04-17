import React, { useRef, useState } from "react";
import { View, StatusBar } from "react-native";
import PagerView from "react-native-pager-view";
import TrakaPage from "./components/OnboardingPages/TrakaPage";
import Project from "./components/OnboardingPages/Project";
import Needs from "./components/OnboardingPages/Needs";
import Allocation from "./components/OnboardingPages/Allocation";
import OnboardingFooter from "./components/OnboardingFooter";
import styles from "./onboardingstyles";
import { SafeAreaView } from "react-native-safe-area-context";
import routes from "../../routes";
import useSetupContext from "../Setup/hooks/useSetupContext";

export default function Onboarding({ navigation }: { navigation: any }) {
  const pagerRef = useRef<PagerView>(null);
  const [page, setCurrentPage] = useState<number>(0);

  const { userOnboardedHandler } = useSetupContext();

  const handlePageChange = (pageNumber: number) => {
    pagerRef?.current?.setPage(pageNumber);
  };

  const nextHandler = () => {
    const nextPage = page + 1;
    pagerRef?.current?.setPage(nextPage);
  };

  const completeHandler = () => {
    navigation.navigate(routes.signup);
    userOnboardedHandler();
  };
  const skipHandler = () => {
    navigation.navigate(routes.login);
    userOnboardedHandler();
  };

  const onPageSelectedHandler = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <PagerView
        onPageSelected={onPageSelectedHandler}
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
      >
        <View collapsable={false} key="1">
          {page === 0 && <TrakaPage handlePageChange={handlePageChange} />}
        </View>
        <View collapsable={false} key="2">
          <Project />
        </View>
        <View collapsable={false} key="3">
          <Allocation />
        </View>
        <View collapsable={false} key="4">
          <Needs />
        </View>
      </PagerView>
      {page !== 0 && (
        <OnboardingFooter
          isLastPage={page === 3}
          activePage={page}
          skipHandler={skipHandler}
          completeHandler={completeHandler}
          nextHandler={nextHandler}
        />
      )}
    </SafeAreaView>
  );
}
