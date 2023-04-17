import { useQuery } from "react-query";
import { Allocation, AllocationParams, ResponseType } from "../../../types";
import { getAllocation } from "../services/getAllocation";

export const ALLOCATION_QUERY_KEY = "allocations";


export default function useAllocation(allocationParams: AllocationParams) {
    return useQuery<ResponseType<Allocation>, Error>(
      [ALLOCATION_QUERY_KEY, allocationParams],
      getAllocation(allocationParams)
    );
  }