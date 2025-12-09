import { userServices } from "@/lib/api/services/user.service"
import { UseQueryConfig } from "../query-client"
import { useQuery } from "@tanstack/react-query"


const usersQueryKey = () => ["users"]
const userDetailQueryKey = (id: string | number) => ["user", id]

export const useUsers = (
    params?: { search: string },
    { config }: UseQueryConfig<typeof userServices.getAll> = {}
) => {
    return useQuery({
        queryKey: usersQueryKey(),
        queryFn: () => userServices.getAll(params),
        ...config
    })
}

export const useUserDetail = (
    id: string | number,
    { config }: UseQueryConfig<typeof userServices.getById> = {}
) => useQuery({
    queryKey: userDetailQueryKey(id),
    queryFn: () => userServices.getById(id),
    enabled: !!id,
    ...config
})