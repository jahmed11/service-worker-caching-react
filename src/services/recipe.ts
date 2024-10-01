export const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes?select=name&limit=0");
  const data = await response.json();

  return data;
};

export const fetchRecipe = async (recipeId: string) => {
  const response = await fetch("https://dummyjson.com/recipes/" + recipeId);
  const data = await response.json();

  return data;
};
