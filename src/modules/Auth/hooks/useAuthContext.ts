import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function useAuthContext() {
  const authState = useContext(AuthContext);
  if (authState === undefined)
    throw new Error("useAuth used outside AuthProvider");

  return authState;
}
