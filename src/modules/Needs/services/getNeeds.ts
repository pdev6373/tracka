import curry from "ramda/src/curry";
import Api from "../../../lib/api/Shared";
import { NeedParams, Need, ResponseType, NeedCategory } from "../../../types";
import formatQueryParams from "../../../utils/formatQueryParams";
import endpoints from "../../../lib/endpoints";

const getNeedReq = (needparams: NeedParams) => {
  const query = formatQueryParams(needparams);

  const transformRes = (data: { data: any }): ResponseType<Need> => {
    const formattedNeeds: Need[] = data.data.rows.map((need: any) => ({
      id: String(need.id),
      category: need.category?.name,
      title: need.name,
      localGovernment: need?.lga,
      state: need?.state,
      community: need?.name,
      created_at: need?.createdAt,
      votes: need?.upvote,
      status: need?.status,
      description: need?.description,
    }));

    return { ...data.data, rows: formattedNeeds };
  };
  return () =>
    Api.get<{ data: any }, ResponseType<Need>>(
      `${endpoints.needs}?${query}`,
      {},
      transformRes
    );
};

export const getNeedsCategory = () => {
  const transformRes = (data: { data: NeedCategory[] }): NeedCategory[] => {
    console.log(data)

    return data.data;
  };

  return () =>
    Api.get<{ data: any }, NeedCategory[]>(
      endpoints.needCategory,
      {},
      transformRes
    );
};

export const getVotedNeeds = (needparams: NeedParams) => {
  const query = formatQueryParams(needparams);

  const transformRes = (data: { data: any }): ResponseType<Need> => {
    const formattedNeeds: Need[] = data.data.map(({needs}: any) => ({
      id: String(needs.id),
      category: needs.category?.name,
      title: needs.name,
      localGovernment: needs?.lga,
      state: needs?.state,
      community: needs?.name,
      created_at: needs?.createdAt,
      votes: needs?.upvote,
      status: needs?.status,
      description: needs?.description,
    }));

    return { ...data.data, rows: formattedNeeds };
  };
  return () =>
    Api.get<{ data: any }, ResponseType<Need>>(
      `${endpoints.votedNeeds}?${query}`,
      {},
      transformRes
    );
};

export const getSubmittedNeeds = (needparams: NeedParams) => {
  const query = formatQueryParams(needparams);


  const transformRes = (data: { data: any }): ResponseType<Need> => {
    const formattedNeeds: Need[] = data.data.map((needs: any) => ({
      id: String(needs.id),
      category: needs.category?.name,
      title: needs.name,
      localGovernment: needs?.lga,
      state: needs?.state,
      community: needs?.name,
      created_at: needs?.createdAt,
      votes: needs?.upvote,
      status: needs?.status,
      description: needs?.description,
    }));

    return { ...data.data, rows: formattedNeeds };
  };
  return () =>
    Api.get<{ data: any }, ResponseType<Need>>(
      `${endpoints.submittedNeeds}?${query}`,
      {},
      transformRes
    );
};



export const getNeeds = curry(getNeedReq);

