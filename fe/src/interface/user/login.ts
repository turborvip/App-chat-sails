// example :))
export interface LoginResult {
  token?: any | undefined;
  refreshToken?: any | undefined;
  auth?: any | undefined;
  data?: any | undefined;
}

export interface LogoutParams {
  token: string;
}

export interface LogoutResult {}
