import { useContext } from "react";
import { SetupContext } from "../Context/SetupContext";

export default function useSetupContext() {
  const setupState = useContext(SetupContext);
  if (setupState === undefined)
    throw new Error("useSetupContext used outside SetupProvider");

  return setupState;
}
