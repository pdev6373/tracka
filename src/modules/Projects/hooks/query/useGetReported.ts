import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { SubscribeInterface } from "../../../../types/Projects";
import { GET_REPORTED_KEY } from "../../../../constants";
import { getReportedProject } from "../../service/project";

export default function useGetReported(params: Record<string, any>) {
  return useQuery<{ rows: SubscribeInterface[] }, ResponseError>(
    [ GET_REPORTED_KEY, params],
    getReportedProject(params)
  );
}