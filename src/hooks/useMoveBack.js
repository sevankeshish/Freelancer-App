import { useNavigate } from "react-router-dom";

export default function useMoveBack() {
  const naviagte = useNavigate();
  return () => naviagte(-1);
}
