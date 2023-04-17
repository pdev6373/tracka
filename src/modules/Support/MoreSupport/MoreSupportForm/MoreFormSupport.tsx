import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {  Box, } from "native-base";
import Styles from './moresupportformstyles'
import Toast from "react-native-toast-message"
import SelectInput from '../../../../components/Input/SelectInput';
import { TextField } from '../../../../components/Input';
import Button from "../../../../components/Buttons/ButtonComponent/Button"
import { useNeedsCategory } from '../../../Needs/hooks/query/useNeeds';
import { Controller, useForm } from 'react-hook-form';
import { requiredRules } from '../../../Auth/utils';
import PickerInput from '../../../../components/Input/PickerInput/PickerInput';
import useSetupContext from '../../../Setup/hooks/useSetupContext';
import { SupportMutaion } from '../../../../types/Support';
import { useCreateSupport } from '../hooks/mutation';
import { useNavigation } from '@react-navigation/native';
import { TextFieldVariant } from '../../../../components/Input/TextField/types';
import routes from '../../../../routes';


interface PrefForm {
    setSelectedState: () => void,
    selectedState: string,
}


const  MoreSupportForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { data: categories } = useNeedsCategory();
  const { preference } = useSetupContext();
  const navigation = useNavigation();

  const { mutate: createSupportFunc, isLoading } = useCreateSupport();


  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SupportMutaion>({
    defaultValues: { 
      category: "",
      title: "",
    }
  });


const submitHandler = (formInput: SupportMutaion) => {
  console.log(formInput.category, formInput.title)
  
  createSupportFunc(
    {
      category: formInput.category,
      title: formInput?.title,
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

const needCategories = !!categories
? categories?.map((category) => ({
    value: category?.name,
    label: category?.name,
  }))
: [];

const loading= false

  return (
    <View style={Styles.form}> 
    <View style={Styles.input}>
            <Controller
              rules={requiredRules}
              control={control}
              name="category"
              render={({ field: { onChange, value } }) => (
                <>
                  {
              Platform.OS === "ios" ? 
              <PickerInput 
              label="Category of Need"
              onValueChange={onChange}
              data={needCategories}
              selectedValue={value}
              errors={errors.category?.message}
               />

            :
              
              <SelectInput
              errors={errors.category?.message}
              variant="secondary"
              onValueChange={onChange}
              selectedValue={value}
              label="Category of Need"
              data={needCategories}
            />}
                </>
              )}
            />
          </View>
    <Box style={Styles.select}> 
    <Controller
              rules={requiredRules}
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant={TextFieldVariant.Primary}
                  onChangeText={onChange}
                  value={value}
                  label="Title Of Needs"
                  errors={errors?.title?.message}
                  placeholder="Title Of Needs"
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

export default MoreSupportForm
