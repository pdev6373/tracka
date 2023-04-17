import curry from 'ramda/src/curry';
import Api from '../../../lib/api/Shared';
import {
  NeedParams,
  Need,
  ResponseType,
  NeedCategory,
  NeedMutation,
} from '../../../types';
import formatQueryParams from "../../../utils/formatQueryParams";
import endpoints from "../../../lib/endpoints";
import { NeedMutationContract } from "../../../types/Needs";

const createNeed = (needParams: NeedMutationContract) => {
  const transformRes = (data: { data: Need }) => {
    return data.data;
  };
  return Api.post(endpoints.createNeed, { ...needParams }, {}, transformRes);
};

export default createNeed;
