export interface AuthParams {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  pics?: string;
}

export interface AuthUser {
  verified: boolean;
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  code?: string;
  image_url?: string;
  status?: string;
  updatedAt?: string;
  createdAt?: string;
  token: string;
}
