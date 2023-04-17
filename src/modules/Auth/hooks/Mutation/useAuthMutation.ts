import { useMutation } from "react-query";
import { AuthParams, AuthUser } from "../../../../types/Auth";
import ResponseError from "../../../../utils/ResponseError";
import {
  signup,
  verifyUser,
  loginUser,
  socialAuth,
  requestPasswordReset,
  passwordReset,
} from "../../Service/auth";

export function useSignup() {
  return useMutation<AuthUser, ResponseError, AuthParams>("sign_up", signup);
}

export function useVerifyUser() {
  return useMutation<AuthUser, ResponseError, { email: string; code: string }>(
    "verify_user",
    verifyUser
  );
}

export function useLoginUser() {
  return useMutation<AuthUser, ResponseError, AuthParams>(
    "login_user",
    loginUser
  );
}

export function useSocialAuth() {
  return useMutation<AuthUser, ResponseError, AuthParams>(
    "social_auth",
    socialAuth
  );
}

export function useRequestPasswordReset() {
  return useMutation<any, ResponseError, { email: string }>(
    "request_password_reset",
    requestPasswordReset
  );
}

export function usePasswordReset() {
  return useMutation<
    any,
    ResponseError,
    { email: string; password: string; code: string }
  >("password_reset", passwordReset);
}
