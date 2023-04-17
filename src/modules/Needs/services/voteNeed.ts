import curry from 'ramda/src/curry';
import Api from '../../../lib/api/Shared';
import {
  Need,
} from '../../../types';
import endpoints from "../../../lib/endpoints";
import { VoteNeedMutation } from "../../../types/Needs";

const voteNeed = (needParams: VoteNeedMutation) => {
  const transformRes = (data: { data: Need }) => {
    return data.data;
  };
  return Api.post(endpoints.voteNeed, { ...needParams }, {}, transformRes);
};

export default voteNeed;
