import { useMutation } from "react-query";
import createFeedBack from "../../services/createFeedback";

import refetchTokens from "../../../../../lib/api/helpers/refetchQuery";
export const FEEDBACK_QUERY_KEY = "FEEDBACK_QUERY_KEY"

export function useCreateFeedBacks() {
  return useMutation("create_feedback", createFeedBack, {
    onSettled: refetchTokens(FEEDBACK_QUERY_KEY),
  });
}
