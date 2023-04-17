/* eslint-disable no-shadow */
import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { ProjectInterface } from "../../../../types/Projects";
import { GET_PROJECTS_NOTIFICATION_KEY } from "../../../../constants";
import { getProjectNotification } from "../../service/project";

export default function useProjectNotification(params: Record<string, any>) {
  return useQuery<{}, ResponseError>(
    [GET_PROJECTS_NOTIFICATION_KEY, params],
    getProjectNotification(params)
  );
}
