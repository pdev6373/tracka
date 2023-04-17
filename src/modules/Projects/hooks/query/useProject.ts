/* eslint-disable no-shadow */
import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { ProjectInterface } from "../../../../types/Projects";
import { GET_PROJECTS_KEY } from "../../../../constants";
import { getProjects } from "../../service/project";

export default function useProjects(params: Record<string, any>,) {
  return useQuery<{ rows: ProjectInterface[] }, ResponseError>(
    [GET_PROJECTS_KEY, params],
    getProjects(params)
  );
}
