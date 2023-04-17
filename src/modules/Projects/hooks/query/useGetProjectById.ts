import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { SubscribeInterface } from "../../../../types/Projects";
import { GET_PROJECTS_BY_ID_KEY } from "../../../../constants";
import { getProjectsById } from "../../service/project";

export default function useGetReported(projectId: any) {
  return useQuery<{ rows: SubscribeInterface[] }, ResponseError>(
    [ GET_PROJECTS_BY_ID_KEY],
    getProjectsById(projectId)
  );
}