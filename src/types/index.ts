export { Need as Need } from "./Needs";
export { NeedStatusEnum } from "./Needs";
export { NeedParams } from "./Needs";
export { NeedMutation } from "./Needs";
export { NeedCategory } from "./Needs";
export { Allocation as Allocation} from "./Allocation";
export {  AllocationParams } from "./Allocation";

export { Person as Person } from "./Person";

export interface ResponseType<p> {
  rows: p[];
  count: string;
  page: number;
}

export interface AllocationResponeType<p> {
  data: {
    allocation: {
      currentpage: number;
      data: p[];
      from: number;
      to: number;
      first_page_url: string;
      last_page: number
      last_page_url: string
      next_page_url: string;
      per_page: number
      prev_page_url: null
      total: number
    }
  }
} 
