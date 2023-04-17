import React, { createContext, useState, useEffect } from "react";
import { getFromStorage, saveToStorage } from "../../../utils/storage";
import { SETUP_KEY } from "../../../constants";
// import useAuthContext from "../../Auth/hooks/useAuthContext";

interface SetupType {
  isSetup: boolean;
  preference: { community: string; state: string; lga: string };
  filterProps: {
    sortBy: string;
    category: number;
  };
  setPreferences: (p: SetupType["preference"]) => void;
  setFilterProps: (p: SetupType["filterProps"]) => void;
  userOnboardedHandler: () => void;
  isOnboarded: boolean;
  projectInterests: string[];
  addToInterest: (p: string) => void;
  
  

}
 
interface SetupStateType {
  isSetup: SetupType["isSetup"];
  isOnboarded: SetupType["isOnboarded"];
  preference: SetupType["preference"];
  projectInterests: SetupType["projectInterests"];
  filterProps: SetupType["filterProps"];
}

export const SetupContext = createContext<SetupType | undefined>(undefined);

export default function SetupContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [setupState, setSetupState] = useState<SetupStateType>({
    isSetup: false,
    isOnboarded: false,
    preference: {
      community: "",
      state: "",
      lga: "",
    },
    projectInterests: [],
   filterProps: {
    sortBy: "",
    category: 10
   }
  });

  const getSetupFromStore = async () => {
    const setup = await getFromStorage<SetupStateType>(SETUP_KEY);
    if (setup) {
      setSetupState(setup);
    }
  };

  const userOnboardedHandler = () => {
    // saveToStorage(SETUP_KEY, { ...setupState, isOnboarded: true });
    setSetupState((prev) => ({
      ...prev,
      isOnboarded: true,
    }));
  };

  const addToInterest = (projectId: string) => {
    setSetupState((prev) => ({
      ...prev,
      projectInterests: [...prev.projectInterests, projectId],
    }));
  };

  useEffect(() => {
    getSetupFromStore();
  }, []);

  useEffect(() => {
    // console.log('infinity')
    saveToStorage(SETUP_KEY, setupState);
  }, [setupState]);

  const setPreferences = (preference: {
    community: string;
    state: string;
    lga: string;
  }) => {
    // const val = { ...setupState, isSetup: true };
    // saveToStorage(SETUP_KEY, val);
    setSetupState((prev) => ({
      ...prev,
      isSetup: true,
      preference,
    }));
  };

const setFilterProps = (filterProps: {
  sortBy: string;
  category: number;
}) => {
  setSetupState((prev) => ({
    ...prev,
    filterProps:filterProps 
  }));
}


  const value = {
    ...setupState,
    setPreferences,
    userOnboardedHandler,
    addToInterest,
    setFilterProps,
  };

  return (
    <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
  );
}
