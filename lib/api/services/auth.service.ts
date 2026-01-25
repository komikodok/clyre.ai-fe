import { apiClient } from "../api-client";

export interface IRegister {
  email: string;
  username: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

let response;

export const authServices = {
  register: async (data: IRegister) => {
    response = await apiClient.post("/api/auth/register", data);

    return response.data;
  },
  login: async (data: ILogin) => {
    response = await apiClient.post("/api/auth/login", data);

    return response.data;
  },
};
