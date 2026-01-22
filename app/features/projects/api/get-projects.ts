import axios from "@/lib/axios";

export async function getProjects() {
  const { data } = await axios.get("/api/projects");
  return data;
}