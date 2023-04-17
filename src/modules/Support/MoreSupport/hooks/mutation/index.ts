import { useMutation } from "react-query";
import createSupport from "../../services/createSupport";

import refetchTokens from "../../../../../lib/api/helpers/refetchQuery";
export const SUPPORT_QUERY_KEY = "SUPPORT_QUERY_KEY"

export function useCreateSupport() {
  return useMutation("create_support", createSupport, {
    onSettled: refetchTokens(SUPPORT_QUERY_KEY),
  });
}
