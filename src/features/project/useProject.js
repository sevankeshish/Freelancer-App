import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProjectApi } from "../../services/projectService";

export default function useProject() {
const {id} = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["project", id],
    queryFn:() => getProjectApi(id),
    retry: false,
  });

  // console.log(data, "API");

  const { project } = data || {};

  return { isLoading, project };
}
