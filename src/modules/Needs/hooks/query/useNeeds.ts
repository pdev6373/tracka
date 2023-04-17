import { getNeeds, getNeedsCategory, getSubmittedNeeds, getVotedNeeds } from "../../services/getNeeds";
import { useQuery } from "react-query";
import {
  Need,
  NeedCategory,
  NeedParams,
  ResponseType,
} from "../../../../types";

export const NEED_QUERY_KEY = "needs";
export const CATEGORY_QUERY_KEY = "get_categories";
export const VOTE_NEED_QUERY = "vote_needs"
export const SUBMITTED_NEED_QUERY = "submitted_needs"


// export const SINGLE_QUOTE_KEY = (companyId: string, quoteId: string) => [QUERY_KEY, companyId, quoteId];

export default function useNeeds(needParams: NeedParams) {
  return useQuery<ResponseType<Need>, Error>(
    [NEED_QUERY_KEY, needParams],
    getNeeds(needParams)
  );
}

export function useNeedsCategory() {
  return useQuery<NeedCategory[], Error>(
    [CATEGORY_QUERY_KEY],
    getNeedsCategory()
  );
}

export function useVotedNeeds(needParams: NeedParams) {
  return useQuery<ResponseType<Need>, Error>(
    [VOTE_NEED_QUERY, needParams],
    getVotedNeeds(needParams)
  );
}

export function useSubmittedNeeds(needParams: NeedParams) {
  return useQuery<ResponseType<Need>, Error>(
    [SUBMITTED_NEED_QUERY, needParams],
    getSubmittedNeeds(needParams)
  );
}