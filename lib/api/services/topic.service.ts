import { apiClient } from "../api-client";

export interface ITopic {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const topicServices = {
  getAll: async () => {
    const response = await apiClient.get("/api/topics");
    return response.data;
  },
  // create: async (topic: Partial<ITopic>) => {
  //   const response = await apiClient.post("/api/topics", topic);
  //   return response.data;
  // },
};
