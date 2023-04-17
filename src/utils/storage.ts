import * as SecureStore from "expo-secure-store";

export const saveToStorage = async (key: string, param: any) => {
  await SecureStore.setItemAsync(key, JSON.stringify(param));
};

export const getFromStorage = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return JSON.parse(result);
  }
  return undefined;
};

export const deleteFromStorage = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};
