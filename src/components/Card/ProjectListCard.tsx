import React from "react";
import { Text, Box, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import ProjectStatusButton from "../Buttons/ProjectStatusButton";
import FilterButton from "../Buttons/FilterButton";
import { digitSeparator } from "../../utils/digitSeparator";

export type ProjectListCardProps = {
  projectStatus: string;
  projectStatuslabel: string;
  projectDescription: string;
  projectBudget: number;
  category: string;
  lga: string;
  state: string;
  reporters: number;
  image: string;
};

const ProjectListCard = ({
  onPress,
  ...props
}: ProjectListCardProps & {
  onPress: (param: ProjectListCardProps) => void;
}) => {
  const {
    projectStatus,
    projectStatuslabel,
    projectDescription,
    projectBudget,
    category,
    lga,
    state,
    reporters,
    image,
  } = props;

  function onPressHandler() {
    onPress(props);
  }

  return (
    <Pressable onPress={onPressHandler}>
      <Box
        width="90%"
        borderRadius={12}
        background="white.white"
        alignSelf="center"
        paddingY={6}
        mt={5}
        mb={3}
      >
        <Text fontSize={26} color="primary.600" fontWeight={400} marginX={5}>
          {digitSeparator(projectBudget)} <Text fontSize={10}>NGN</Text>
        </Text>

        <Text color="neutral.600" fontSize={16} mt={2} marginX={5}>
          {projectDescription}
        </Text>
        <Image
          size={150}
          source={{
            uri:
              image ||
              "https://res.cloudinary.com/zokky/image/upload/v1641979739/project.png",
          }}
          alt="project"
          width="100%"
          mt={6}
        />
        <ProjectStatusButton
          status={projectStatus}
          label={projectStatuslabel}
        />

        <Box flexDirection="row" marginLeft={5} flexWrap="wrap">
          <FilterButton filter={category} filterType="category" />
          <FilterButton filter={lga} filterType="lga" />
          <FilterButton filter={state} filterType="state" />
        </Box>

        <Box flexDirection="row" marginX={5} mt={2}>
          <Text flex={3} color="neutral.600" fontSize={16} fontWeight={500}>
            Reported by {reporters} others
          </Text>
          <Box flex={1} flexDirection="row" justifyContent="space-around">
            <Ionicons name="ios-bookmark-outline" size={24} color="#A0ABBB" />
            <Ionicons name="share-social-outline" size={24} color="#A0ABBB" />
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ProjectListCard;
