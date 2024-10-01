import { useEffect, useState, ChangeEvent, FC } from "react";
import DisplayRecipe from "./DisplayRecipe";
import SelectRecipe from "./SelectRecipe";
import { fetchRecipes, fetchRecipe } from "../services/recipe";
import styles from "./style.module.css";

const Recipes: FC = () => {
  const [recipesData, setRecipesData] = useState<{ id: number; name: string }[]>([]);
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchRecipes();
      setRecipesData(data.recipes);
    })();
  }, []);

  const getRecipeInfo = async (recipeId: string) => {
    const data = await fetchRecipe(recipeId);
    setRecipeInfo(data);
  };

  const onRecipeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      getRecipeInfo(e.target.value);
    }
  };

  return (
    <div>
      <div className={styles["select-recipe__container"]}>
        <SelectRecipe onChange={onRecipeSelect} data={recipesData} />
      </div>
      <div className={styles['display-recipe__wrapper']} >
        <DisplayRecipe recipe={recipeInfo} />
      </div>
    </div>
  );
};

export default Recipes;
