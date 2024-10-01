import { ChangeEvent } from "react";
import styles from './style.module.css'
type Recipe = {
  id: number;
  name: string;
};

interface SelectRecipeProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  data: Recipe[];
}

const SelectRecipe = ({ onChange, data }: SelectRecipeProps) => {
  return (
    <div>
      <label className={styles['recipe-label']} htmlFor="recipe-select">Recipes:</label>
      <select id="recipe-select" onChange={onChange} defaultValue="">
        <option value="" disabled>
          Select a recipe
        </option>
        {data?.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectRecipe;
