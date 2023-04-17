/* eslint-disable no-shadow */
import { useQuery } from "react-query";
import ResponseError from "../../../../utils/ResponseError";
import { ProjectInterface } from "../../../../types/Projects";
import { GET_MINISTRIES_KEY } from "../../../../constants";
import { getMinistries } from "../../service/project";

export default function useMinistry() {
  return useQuery<{ rows: ProjectInterface[] }, ResponseError>(
    [GET_MINISTRIES_KEY],
    getMinistries()
  );
}
