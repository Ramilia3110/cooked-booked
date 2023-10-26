import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => "categories.php",
    }),
    category: builder.query({
      query: (categoryName) => `filter.php?c=${categoryName}`,
    }),
    mealRecipe: builder.query({
      query: (idMeal) => `lookup.php?i=${idMeal}`,
    }),
    mealSearch: builder.query({
      query: (mealName) => `search.php?s=${mealName}`,
    }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryQuery,
  useMealRecipeQuery,
  useMealSearchQuery,
} = mealsApi;
