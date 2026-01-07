import { apiClient } from "../api-client";

export interface IUser {
  email: string;
  username: string;
  password: string;
  image?: string;
}

export const userServices = {
  getAll: async (params?: { search?: string }) => {
    const response = await apiClient.get("/api/users", {
      params: params,
    });

    return response.data;
  },
  getDetail: async (token: string) => {
    const response = await apiClient.get("api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
  getById: async (id: string | number) => {
    const response = await apiClient.get(`/api/users/${id}`);

    return response.data;
  },
};
