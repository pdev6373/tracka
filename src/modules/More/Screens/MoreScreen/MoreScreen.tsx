import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Modal } from "react-native";
import { View, Text, Box } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";
import Avatar from "../../../../components/Avatar";
import NavItem from "../../../../components/NavItem";
import useAuthContext from "../../../Auth/hooks/useAuthContext";
import { screenList } from "./utils";
import styles from "./morescreenstyles";
import prefStyles from "../../../Settings/Preference/preferencestyles";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import { useDeleteAccount } from "../../hooks/mutations/useAccount";
import routes from "../../../../routes";

const MoreScreen = (props: { navigation: any}) => {
  const statusBarHeight = getStatusBarHeight();
  const [activeRoute, setActiveRoute] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const { mutate: deleteAccountFunc, isLoading: deletingAccount, error } = useDeleteAccount();
  const { logout, isAuthenticated } = useAuthContext();


  const routeHandler = (route: string) => {
    setActiveRoute(route);
    props.navigation.navigate(route);
  };
  const openLogout = () => {
    logout();
    setShowModal(!showModal);
  };

  const { user } = useAuthContext();

  const renderUserName = () => {
    const firstName = user?.firstName || "";
    const lastName = user?.lastName || "";
    if (!!firstName || !!lastName) {
      return (
        <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
      );
    }
    return null;
  };


  const renderAvatarName = () => {
    const firstName = user?.firstName || "";
    const lastName = user?.lastName || "";
    if (!!firstName || !!lastName) {
      return `${firstName} ${lastName}`;
    }
    return user?.email || "";
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <View
          style={[
            styles.profileWrapper,
            {
              paddingTop: statusBarHeight + scale(1),
            },
          ]}
        >
          <View style={styles.profile}>
            <Avatar
              showName={false}
              size={40}
              src={user?.image_url}
              name={renderAvatarName()}
            />
            <View style={styles.profileNameWrapper}>
              {renderUserName()}
              <Text style={styles.profileEmail}>{user?.email}</Text>
            </View>
          </View>
        </View>
        <View>
          {screenList.map((screen) => (
            <NavItem
              routeHandler={routeHandler}
              {...screen}
              key={screen.title}
              isActive={activeRoute === screen.route}
            />
          ))}
        </View>
        <View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Are you sure you want to delete your account?</Text>
            <View style={styles.modalBtnHolder}>
              <TouchableOpacity 
                style={styles.yesButton}
                disabled={deletingAccount}
                onPress={() => {
                  console.log('====', 'Delete account API');
                  let c = deleteAccountFunc()
                  console.log('====', c)
                  openLogout()
                }}
              > 
                <Text style={{color: primaryColors.red_light}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.noButton}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              > 
                <Text style={{color: primaryColors.green}}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Box style={prefStyles.deleteAccountButtonHolder}> 
          <TouchableOpacity 
            style={prefStyles.deleteButton}
            disabled={deletingAccount}
            onPress={() => {
              setShowModal(!showModal);
            }}
          > 
            <Text style={{color: primaryColors.red_light}}>Delete Account</Text>
          </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;
