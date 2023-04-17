/* eslint-disable no-shadow */
import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { ProjectInterface } from "../../../../types/Projects";
import { GET_NEW_PROJECT_KEY } from "../../../../constants";
import { getNewProject, getNewProjects } from "../../service/project";

export default function useGetNewProject(params: Record<string, any>,) {
  return useQuery<{ rows: ProjectInterface[] }, ResponseError>(
    [GET_NEW_PROJECT_KEY, params],
    getNewProject(params)
  );
}
