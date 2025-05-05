import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject(){
    const queryClinet = useQueryClient();

    const {isPending: isCreating ,mutate: createProject} = useMutation({
        mutationFn: createProjectApi,
        onSuccess:(data) => {
            toast.success(data.message);

            queryClinet.invalidateQueries({
                queryKey:["owner-projects"],
            });
        },

        onError: (err) => toast.error(err?.response?.data?.message),
    });

    return {isCreating , createProject}
}