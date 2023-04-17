export interface ProjectRepresentative {
  name: string;
  phoneNumber?: string;
  email?: string;
}

enum ProjectStatus {
  "PENDING" = "pending",
}

export interface ProjectInterface {
  id: string;
  amount: number;
  title: string;
  category: string;
  state: string;
  lga: string;
  reportCount?: number;
  subscriberCount?: number;
  agency?: string;
  status: ProjectStatus;
  representative?: ProjectRepresentative;
  imageSrc?: string;
  region?: string;
}

export interface SubscribeInterface {
  id: number;
  name: string;
  description: string;
  amount: string;
  source_link: null | string;
  year: string;
  num_views: string,
  upvote: number,
  downvote: number,
  state: string,
  amount_disbursed: null | string | number,
  address: null | string,
  deleted: null | boolean | string,
  is_active: null | boolean,
  originalId: string,
  region: string,
  status: string,
  stakeholderName: string,
  meta: {},
  stakeholderMobile: null | string,
  stakeholderEmail: null | string,
  createdAt: string,
  updatedAt:string,
  yearId: number,
  countryId: number,
  locationId: number,
  sectorId: null | number | string,
  areaId: null | number | string,
  agencyId: number,
  ministryId: number,
  userId: number | string

}
