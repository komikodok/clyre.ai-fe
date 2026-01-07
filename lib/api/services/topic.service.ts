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
    const response = await apiClient.get("/api/agents/topic");
    return response.data;
  },
};
