// // services/category.service.ts

// import api from "@/libs/axios";
// import { MainCategory } from "@/types/category";

// export async function getMainCategories() {
//   const { data } = await api.get<MainCategory[]>(
//     "/api/main-categories/"
//   );

//   return data;
// }

// export async function getSubCategories() {
//   const categories = await getMainCategories();

//   return categories.flatMap((category) =>
//     category.sub_categories.map((sub) => ({
//       ...sub,
//       main_category_id: category.id,
//       main_category_name: category.name,
//     }))
//   );
// }

// services/category.service.ts

import api from "@/libs/axios";
import { MainCategory, SubCategory } from "@/types/category";

export async function getMainCategories() {
  const { data } = await api.get<MainCategory[]>(
    "/api/main-categories/"
  );

  return data;
}

export async function getSubCategories() {
  const { data } = await api.get<SubCategory[]>(
    "/api/sub-categories/"
  );

  return data;
}