import curry from 'ramda/src/curry';
import Api from '../../../../lib/api/Shared';
import formatQueryParams from "../../../../utils/formatQueryParams";
import endpoints from "../../../../lib/endpoints";
import { FeedBackMutaion,  FeedBack } from "../../../../types/FeedBack/index";

const createNeed = (feedBackPrams: FeedBackMutaion) => {
  const transformRes = (data: { data: FeedBack }) => {
    return data.data;
  };
  return Api.post(endpoints.createFeedBack, { ...feedBackPrams }, {}, transformRes);
}; 

export default createNeed;
