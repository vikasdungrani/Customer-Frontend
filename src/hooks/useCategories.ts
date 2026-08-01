// // hooks/useCategories.ts

// "use client";

// import { useEffect, useState } from "react";
// import { getMainCategories } from "@/services/category.service";
// import { MainCategory } from "@/types/category";

// export default function useCategories() {
//   const [categories, setCategories] = useState<MainCategory[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     load();
//   }, []);

//   async function load() {
//     try {
//       const data = await getMainCategories();
//       setCategories(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const subCategories = categories.flatMap((category) =>
//     category.sub_categories.map((sub) => ({
//       ...sub,
//       main_category_id: category.id,
//       main_category_name: category.name,
//     }))
//   );

//   return {
//     categories,
//     subCategories,
//     loading,
//     reload: load,
//   };
// }

// hooks/useCategories.ts

"use client";

import { useEffect, useState } from "react";

import {
  getMainCategories,
  getSubCategories,
} from "@/services/category.service";

import {
  MainCategory,
  SubCategory,
} from "@/types/category";

export default function useCategories() {
  const [categories, setCategories] = useState<MainCategory[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const [mainData, subData] = await Promise.all([
        getMainCategories(),
        getSubCategories(),
      ]);

      setCategories(mainData);
      setSubCategories(subData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    categories,
    subCategories,
    loading,
    reload: load,
  };
}