import { Person } from "../Person";

export enum NeedStatusEnum {
  "Pending" = "Pending",
  "Progress" = "In Progress",
  "Attended" = "Attended",
  "Approved" = "Approved",
}

export interface Need {
  id: string;
  category: string;
  title: string;
  localGovernment: string;
  state: string;
  community: string;
  representative: string;
  created_at: string;
  author: Person;
  votes: number;
  status: NeedStatusEnum;
  description?: string;
}

export interface NeedParams {
  search?: string;
  state?: string;
  lga?: string;
  category?: string;
}

export interface NeedMutation {
  category: string;
  title: string;
  community: string;
  lga: string;
  description: string;
  state: string;
}

export interface NeedMutationContract {
  title: string;
  name: string;
  categoryId: string;
  state: string;
  lga: string;
  description: string;
}

export interface NeedCategory {
  id: string;
  name: string;
}

export interface VoteNeedMutation {
  communityId: number;
}
