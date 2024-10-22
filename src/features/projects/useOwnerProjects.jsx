import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

export default function useOwnerProjects() {
  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getOwnerProjectApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
