import List from "../SharedComponents/List";
import Tag from "../SharedComponents/Tags";
import { Recipe } from "../types/recipe";
import styles from "./style.module.css";

interface DisplayRecipeProps {
  recipe?: Recipe;
}

const DisplayRecipe = ({ recipe }: DisplayRecipeProps) => {
  if (!recipe) {
    return <div className={styles["empty-recipe"]}>Please select a recipe</div>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <div>
        <h3>{recipe.name}</h3>
        <div className={styles["recipe__img"]}>
          <img
            width="100%"
            height="100%"
            src={recipe.image || ""}
            alt={recipe.name || "recipe image"}
          />
        </div>

        <div>
          <span className={styles["sub-heading"]}>Meal Type:</span>

          {recipe.mealType.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>

        <List list={recipe.ingredients} label="Ingredients" />

        <List list={recipe.instructions} label="Instructions" />

        <div className={styles["recipe__info"]}>
          <span className={styles["sub-heading"]}>Difficulty:</span>
          <span>{recipe.difficulty}</span>
        </div>

        <div className={styles["recipe__info"]}>
          <span className={styles["sub-heading"]}>Cuisine:</span>
          <span>{recipe.cuisine}</span>
        </div>

        <div>
          <span className={styles["sub-heading"]}>Tags:</span>
          {recipe.tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayRecipe;
