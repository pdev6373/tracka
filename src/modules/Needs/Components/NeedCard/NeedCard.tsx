import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Need } from "../../../../types";
import styles from "./needcardstyle";
import NeedStatusCard from "../NeedStatusCard";
import Vote from "../../../../components/Vote";
import Avatar from "../../../../components/Avatar";
import DateComponent from "../../../../components/DateComponent";
// import { primaryColors } from "../../../../styles/Colors";

interface NeedCardProps extends Need {
  onPress: (param: Need) => void;
}

export default function NeedCard({ onPress, ...props }: NeedCardProps) {
  function onPressHandler() {
    onPress(props);
  }
  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text style={styles.category}>{props.category}</Text>
          <DateComponent date={props?.created_at} />
        </View>
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.stateListWrapper}>
          <View style={styles.stateListItem}>
            <Text style={styles.stateListDot}>{"\u2022"}</Text>
            <Text style={styles.stateListText}>{props.state}</Text>
          </View>
          <View style={styles.stateListItem}>
            <Text style={styles.stateListDot}>{"\u2022"}</Text>
            <Text style={styles.stateListText}>{props.localGovernment}</Text>
          </View>
          <View style={styles.stateListItem}>
            <Text style={styles.stateListDot}>{"\u2022"}</Text>
            <Text style={styles.stateListText}>{props.community}</Text>
          </View>
        </View>
        {props.description && (
          <View>
            <Text style={styles.description}>{props.description}</Text>
          </View>
        )}
        <View style={styles.statusWrapper}>
          <NeedStatusCard status={props.status} />
        </View>
        <View style={styles.bottomWrapper}>
          <View>
            <Vote vote={props.votes} />
          </View>
          {props?.author && (
            <View>
              <Avatar name={props?.author?.name} src={props?.author?.pics} />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
