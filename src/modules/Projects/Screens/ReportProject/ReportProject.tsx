import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import { Image } from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import Button from "../../../../components/Buttons/ButtonComponent";
import { PlusIcon } from "../../../../components/Vectors";
import TextArea from "../../../../components/Input/TextArea";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useReportProject } from "../../hooks/mutation/useProjectMutation";
import Toast from "react-native-toast-message";
import styles from "./reportProjectStyles";
import { channelConfig,pusher} from "../../hooks/Pusher";
import axios from "axios";
import useAuthContext from "../../../Auth/hooks/useAuthContext";
import routes from "../../../../routes";
import { getFromStorage, saveToStorage } from '../../../../utils/storage'
import { NOTIFICATION_LIST_KEY } from "../../../../constants"

export const requiredRules = {
  required: { value: true, message: "Required *" },
};

export default function ReportProject({ route, navigation }: { route:any, navigation: any}) {
  const projectId = route?.params?.projectId;
  const [selectedImage, setSelectedImage] = useState([]);
  const { user } = useAuthContext();

  const [reportedData, setReportedData] = useState(null)
  const [projectReported,setProjectReported] = useState(false)
  const [notification, setNotification] = useState([])
  useEffect(() => {
    const fetchNotification = async () => {
      const notification: any = await getFromStorage(NOTIFICATION_LIST_KEY)
      setNotification(notification)
    }
    fetchNotification()

  }, [notification])


// useEffect(() => {
//   if (projectReported) { 
//     const channel = pusher.subscribe(`project-${projectId}`);
//     if (channel) {
//       channel.bind('projectReport', function(data) {
//         console.log(JSON.stringify(data))
//         // console.log(JSON.parse(value))
//       }); 
//     } 
//   }
// }, [projectReported]) 

// useEffect(() => {
//   channelConfig(projectId, user?.id, routes)
// })

  const { mutate: reportProject, isLoading, error } = useReportProject();

  if (error){
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (pickerResult.cancelled === true) {
      return;
    }

    let localUri = pickerResult.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    setSelectedImage((prev) => [
      ...prev,
      { localUri: pickerResult.uri, filename, type },
    ]);
  };

  const printButtonText = () => {
    if (!!selectedImage.length && selectedImage.length < 3) {
      return "Add another image";
    }
    return " Add image";
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ notes: string }>( 
  );

  const submitReport = async (formValue) => {
    let formData = new FormData();
    selectedImage.forEach((item, i) => {
      formData.append("files", {
        uri: item.localUri,
        type: item.type || "image/jpeg",
        name: item.filename || `filename${i}.jpg`,
      });
    });
    formData.append("description", formValue.notes);
    formData.append("projectId", projectId);
    let files = selectedImage.forEach((item, i) => {
      formData.append("files", {
        uri: item.localUri,
        type: item.type || "image/jpeg",
        name: item.filename || `filename${i}.jpg`,
      });
    });
    let reportData = {}
    if(selectedImage.length > 0){
      reportData = {'files': files, "description": formValue.notes, "projectId": projectId}
    }else{
      reportData = {"description": formValue.notes, "projectId": projectId}
    }
    console.log('reportData',reportData)
     reportProject(reportData, {
      onSettled: () => {
        setProjectReported(true)
        Toast.show({
          type: "info",
          text1: "Project Reported",
          text2: "An admin would review and approve",
        });
        navigation.goBack();
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader heading="Report" />
      <ScrollView style={styles.scroll}>
        <View style={styles.contentWrapper}>
          <View style={styles.addImageBtnWrapper}>
            <Button
              disabled={selectedImage.length === 3}
              onPress={openImagePickerAsync}
              variant="primary"
            >
              <View style={styles.addImageBtn}>
                <PlusIcon />
                <Text style={styles.addImageText}>{printButtonText()}</Text>
              </View>
            </Button>
          </View>
          <Text style={styles.lead}>
            You can add an image of the project (Preferably not larger than
            2mega bytes)
          </Text>
          <View style={styles.imageSection}>
            {selectedImage.map((img, index) => (
              <View key={img.filename} style={styles.thumbnailWrapper}>
                <Image
                  alt={`Image${index}`}
                  resizeMode="cover"
                  source={{ uri: img.localUri }}
                  style={styles.thumbnail}
                />
              </View>
            ))}
          </View>
          <View style={styles.textAreaWrapper}>
            <Controller
              control={control}
              name="notes"
              rules={requiredRules}
              render={({ field: { onChange, value } }) => (
                <TextArea
                  onTextChange={onChange}
                  value={value}
                  label="Note"
                  placeholder="Please tell us what you noticed"
                  errors={errors.notes?.message}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitBtnWrapper}>
        <Button
          onPress={handleSubmit(submitReport)}
          label={isLoading ? "Loading" : "Submit"}
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
}
