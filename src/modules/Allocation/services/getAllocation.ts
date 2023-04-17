import curry from "ramda/src/curry";
import Api from "../../../lib/api/Shared";
import { Allocation, AllocationParams, AllocationResponeType } from "../../../types";
import formatQueryParams from "../../../utils/formatQueryParams";
import endpoints from "../../../lib/endpoints";


const getAllocationReq = (allocationParams: AllocationParams) => {
  const query = formatQueryParams(allocationParams);
  return () =>
    Api.get<{ data: any }, AllocationResponeType<Allocation>>(
      `${endpoints.allocation}?${query}`,
      {},
    );
};

// export const getNeedsCategory = () => {
//   const transformRes = (data: { data: NeedCategory[] }): NeedCategory[] => {
//     return data.data;
//   };

//   return () =>
//     Api.get<{ data: any }, NeedCategory[]>(
//       endpoints.needCategory,
//       {},
//       transformRes
//     );
// };

export const getAllocation = curry(getAllocationReq);
