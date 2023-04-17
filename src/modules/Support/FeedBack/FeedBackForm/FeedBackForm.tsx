import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Select, Box, CheckIcon, Center, ScrollView, VStack, FormControl ,} from "native-base";
import Toast from "react-native-toast-message"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColors } from '../../../../styles/Colors';
import { Ionicons } from '@expo/vector-icons';
import Styles from './feedbackformstyles'
import SelectInput from '../../../../components/Input/SelectInput';
import { TextAreaComponent, TextField } from '../../../../components/Input';
import Button from "../../../../components/Buttons/ButtonComponent/Button"
import {Picker} from '@react-native-picker/picker';
import { Controller, useForm } from 'react-hook-form';
import { requiredRules } from '../../../Auth/utils';
import { TextFieldVariant } from '../../../../components/Input/TextField/types';
import { FeedBackMutaion, } from '../../../../types/FeedBack';
import { useCreateFeedBacks } from '../hooks/mutation';
import routes from '../../../../routes';
import { useNavigation } from '@react-navigation/native';

interface PrefForm {
    setSelectedState: () => void,
    selectedState: string,
}
type FeedBackProps = {
  // isFormComplete: boolean, 
  navigation: any
}


const  FeedBackForm = () => {

  const { mutate: createFeedFunc, isLoading } = useCreateFeedBacks();

  const navigation = useNavigation();


const submitHandler = (formInput: FeedBackMutaion) => {
  console.log(formInput.name, formInput.subject)
  createFeedFunc(
    {
      name: formInput.name,
      subject: formInput?.subject,
      description: formInput?.description,
    },
    {
      onError: (error: any) => {
        Toast.show({
          type: "error",
          text1: error?.message || "Could not create feed at this time",
        });
        navigation.navigate(routes.more);

      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Feedback successfully sent",
          text2: "Feedback would be accessed and checked by admin",
        });
          navigation.navigate(routes.more);
      },
    }
  );
};

const loading= false

const {
  control,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<FeedBackMutaion>({
  defaultValues: {
    name: "",
    description: "",
    subject: ""

  },
});

  return (
    <View style={Styles.form}> 
 <Box style={Styles.select}> 
         <Controller
              rules={requiredRules}
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Your Issue"
                  errors={errors?.name?.message}
                  placeholder="Your Issue"
                />
              )}
            />
    </Box>
    <Box style={Styles.select}> 
    <Controller
              rules={requiredRules}
              control={control}
              name="subject"
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Subject"
                  errors={errors?.subject?.message}
                  placeholder="Subject"
                />
              )}
            />
    </Box>
    <Box style={Styles.select}> 
    <Controller
              rules={requiredRules}
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <TextAreaComponent
                style={Styles.select}
                  onTextChange={onChange}
                  value={value}
                  label="Description"
                  errors={errors?.description?.message}
                  placeholder="description"
                />
              )}
            />
  
    </Box> 
    <Text style={Styles.text2}>
    Our support team will send you a notifiation when the need has been added. 
    </Text>
    <View style={Styles.BtnWrapper}> 
         <Button
              disabled={isLoading}
            onPress={handleSubmit(submitHandler)}
              variant="primary"
              label={loading ? "loading.." : "Submit"}
            />
              
    </View>

    </View>
  )
}

export default FeedBackForm
