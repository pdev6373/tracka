/* eslint-disable no-shadow */
import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { ProjectInterface } from "../../../../types/Projects";
import { GET_NEW_PROJECTS_KEY } from "../../../../constants";
import { getNewProjects } from "../../service/project";

export default function useGetNewProjects(params: Record<string, any>,) {
  return useQuery<{ rows: ProjectInterface[] }, ResponseError>(
    [GET_NEW_PROJECTS_KEY, params],
    getNewProjects(params)
  );
}
