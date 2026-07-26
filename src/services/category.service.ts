import api from "@/libs/axios";
import { MainCategory } from "@/types/category";

export async function getMainCategories() {
  const { data } = await api.get<MainCategory[]>(
    "/api/main-categories/"
  );

  return data;
}