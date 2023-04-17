import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "native-base";
import StatusCard from "../../../../components/StatusCard";
import FilterButton from "../../../../components/Buttons/FilterButton";
import { ProjectInterface } from "../../../../types/Projects";
import { digitSeparator } from "../../../../utils/digitSeparator";
import styles from "./projectcardstyle";

interface ProjectCardInterface extends ProjectInterface {
  onPressHandler: (params: ProjectInterface) => void;
}

export default function ProjectCard({
  onPressHandler,
  ...props
}: ProjectCardInterface) {
  // console.log(props.agency)
  return (
    <Pressable onPress={() => onPressHandler(props)}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.amountWrapper}>
            <Text style={styles.amount}>
              {!!props.amount ? digitSeparator(props.amount) : "N/A"}
            </Text>
            {!!props?.amount && <Text style={styles.amountUnit}>NGN</Text>}
          </View>
          {!!props?.title && <Text style={styles.title}>{props.title}</Text>}
        </View>
        <View style={styles.imageWrapper}>
          <Image
            alt="project banner"
            resizeMode="cover"
            style={styles.image}
            source={{
              uri:
                props?.imageSrc ||
                "https://res.cloudinary.com/budgit/image/upload/v1643875675/Image_1_ilwx9t.png",
            }}
          />
          <View style={styles.statusCard}>
            <StatusCard type="red">{props.status}</StatusCard>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.tabList}>
            {/* {!!props.category && (
              <FilterButton filter={props?.category} filterType="category" />
            )} */}
            {!!props.lga && (
              <FilterButton filter={props.lga} filterType="lga" />
            )}
            {!!props.state && (
              <FilterButton filter={props.state} filterType="state" />
            )}
          </View>
          {!!props.reportCount && (
            <View style={styles.reportView}>
              <Text style={styles.reported}>
                Reported by {props.reportCount || 0} others
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}
