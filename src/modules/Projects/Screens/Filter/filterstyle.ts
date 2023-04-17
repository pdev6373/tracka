import { StyleSheet } from "react-native";
import { primaryColors } from "../../../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
  },
  filter: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: scale(16),
    height: scale(68),
  },
  heading: {
    fontSize: scale(16),
    color: primaryColors.dark,
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: 'Roboto',
  },
  filterWrapper: {
    paddingVertical: scale(16),
    paddingHorizontal: scale(16),
  },
  section: {
    backgroundColor: primaryColors.white,
    borderRadius: scale(12),
    marginBottom: scale(18),
  },
  sectionHeader: {
    fontFamily: 'Roboto',
    fontSize: scale(14),
    marginBottom: scale(12),
  },
  sectionTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
  },
  sectionTabLabel: {
    fontFamily: 'Roboto',
    fontSize: scale(14),
    color: primaryColors.lightBlue,
    fontWeight: '500',
    marginRight: scale(30),
  },
});

export default styles;
