import { useMutation } from "react-query";
import voteNeed from "../../services/voteNeed";
import createNeed from "../../services/createNeeds"
import { NEED_QUERY_KEY } from "../query/useNeeds";
import refetchTokens from "../../../../lib/api/helpers/refetchQuery";
import optimisticUpdate from "../../../../lib/api/helpers/optimisticUpdate";

export function useCreateNeed() {
  return useMutation("create_need", createNeed, {
    onSettled: refetchTokens(NEED_QUERY_KEY),
  });
}


export function useVoteNeed() {
  return useMutation("vote_need", voteNeed, {
    ...optimisticUpdate([NEED_QUERY_KEY], (old: any, newValue) => {
        // console.log(old, newValue) 

    })
  });
}