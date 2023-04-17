import { useMutation } from "react-query";
import refetchTokens from "../../../../lib/api/helpers/refetchQuery";
import { NEED_QUERY_KEY } from "../../../Needs/hooks/query/useNeeds";
import deleteAccount from "../../services/deleteAccount";

export function useDeleteAccount() {
    return useMutation("delete_account", deleteAccount);
}