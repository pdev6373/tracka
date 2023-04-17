export interface Allocation {
    state: string;
    allocation_type: string;
    year: string,
    month: string,
    netAllocation: number
    lga: string,
    category: string
}

export interface AllocationParams {
    state?: string;
    lga?: string;
    category: string;
    year: string
  }