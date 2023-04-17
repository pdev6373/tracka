import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { SubscribeInterface } from "../../../../types/Projects";
import { GET_SUBSCRIBE_FETCH_KEY } from "../../../../constants";
import { getListOfSubscribe } from "../../service/project";

export default function useGetSubscribe(params: Record<string, any>) {
  return useQuery<{ rows: SubscribeInterface[] }, ResponseError>(
    [GET_SUBSCRIBE_FETCH_KEY, params],
    getListOfSubscribe(params)
  );
}