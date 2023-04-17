import { NavIconMapEnum } from "../../../../components/NavItem/NavItem";
import routes from "../../../../routes";

export const screenList = [
  {
    title: "View your needs",
    iconName: NavIconMapEnum.THUMBS_UP,
    route: routes.interestedNeeds,
  },
  {
    title: "Interested and reported projects",
    iconName: NavIconMapEnum.CUBE,
    route: routes.interestedProject,
  },
  {
    title: "Manage Account",
    iconName: NavIconMapEnum.PERSON,
    route: routes.manageAccount,
  },
  {
    title: "Settings",
    iconName: NavIconMapEnum.SETTINGS,
    route: routes.settings,
  },
  {
    title: "About the App",
    iconName: NavIconMapEnum.INFO,
    route: routes.about,
  },
  {
    title: "Support",
    iconName: NavIconMapEnum.SUPPORT,
    route: routes.support,
  },
  {
    title: "Logout",
    iconName: NavIconMapEnum.LOGOUT,
    route: routes.logout,
  },
];
