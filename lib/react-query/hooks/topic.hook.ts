import { useQuery } from "@tanstack/react-query";
import { topicServices } from "@/lib/api/services/topic.service";
import { UseQueryConfig } from "../query-client";

const topicsQueryKey = () => ["topics"];

export const useTopics = ({
  config,
}: UseQueryConfig<typeof topicServices.getAll> = {}) => {
  return useQuery({
    queryKey: topicsQueryKey(),
    queryFn: () => topicServices.getAll(),
    ...config,
  });
};
