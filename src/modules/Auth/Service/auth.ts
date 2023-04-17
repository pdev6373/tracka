import Api from "../../../lib/api/Shared";
import { AuthParams, AuthUser } from "../../../types/Auth";
import endpoints from "../../../lib/endpoints";

export function signup(payload: AuthParams) {
  const transformResponse = (data: { data: { user: AuthUser } }) => {
    return data.data.user;
  };
  return Api.post<{ data: { user: AuthUser } }, AuthUser>(
    endpoints.createUser,
    { ...payload },
    {},
    transformResponse
  );
}

export function verifyUser(payload: { email: string; code: string }) {
  console.log('cccc', payload)
  const transformResponse = (data: { data: { user: AuthUser } }) => {
    return data.data.user;
  };

  return Api.post<{ data: { user: AuthUser } }, AuthUser>(
    endpoints.verifyUser,
    { ...payload },
    {},
    transformResponse
  );
}

export function loginUser(payload: AuthParams) {
  const transformResponse = (data: {
    data: { user: AuthUser; token: string };
  }) => {
    return { ...data.data.user, token: data.data.token };
  };

  return Api.post<{ data: { user: AuthUser; token: string } }, AuthUser>(
    endpoints.loginUser,
    { ...payload },
    {},
    transformResponse
  );
}

export function socialAuth(payload: AuthParams) {
  const transformResponse = (data: {
    data: { user: AuthUser; token: string };
  }) => {
    return { ...data.data.user, token: data.data.token };
  };

  return Api.post<{ data: { user: AuthUser; token: string } }, AuthUser>(
    endpoints.socialAuth,
    { ...payload },
    {},
    transformResponse
  );
}

export function requestPasswordReset(payload: { email: string }) {
  return Api.post<{ data: { message: string } }, any>(
    endpoints.requestPasswordReset,
    { ...payload },
    {}
  );
}

export function passwordReset(payload: {
  email: string;
  password: string;
  code: string;
}) {
  return Api.post<{ data: { message: string } }, any>(
    endpoints.passwordReset,
    { ...payload },
    {}
  );
}
