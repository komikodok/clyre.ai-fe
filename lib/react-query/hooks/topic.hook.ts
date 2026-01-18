import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { topicServices } from "@/lib/api/services/topic.service";
import { UseMutationConfig, UseQueryConfig } from "../query-client";
import { queryClient } from "../query-client";

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

// export const useCreateTopic = ({
//   config,
// }: UseMutationConfig<typeof topicServices.create> = {}) => {
//   return useMutation({
//     onSuccess: (...args) => {
//       queryClient.invalidateQueries({ queryKey: topicsQueryKey() });
//       config?.onSuccess?.(...args);
//     },
//     mutationFn: (topic) => topicServices.create(topic),
//     ...config,
//   });
// };
