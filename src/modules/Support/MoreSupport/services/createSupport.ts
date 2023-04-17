import curry from 'ramda/src/curry';
import Api from '../../../../lib/api/Shared';
import endpoints from "../../../../lib/endpoints";
import {Support, SupportMutaion} from "../../../../types/Support";

const createSupport = (supportPrams: SupportMutaion) => {
  const transformRes = (data: { data: Support }) => {
    return data.data;
  };
  return Api.post(endpoints.createSupport, { ...supportPrams }, {}, transformRes);
}; 

export default createSupport;
