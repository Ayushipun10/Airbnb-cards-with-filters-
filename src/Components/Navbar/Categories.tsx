import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "../Utils/Label";
import "./Category.css";
import expand_circle_right from '@mui/material/Icon'

interface CategoriesProps {
  setSelectedCategory: (category: string | null) => void;
  setDisplayBeforeTaxes: React.Dispatch<React.SetStateAction<boolean>>;
  cardsList: any[];
}

const Categories = ({
  setSelectedCategory,
  setDisplayBeforeTaxes,
  cardsList,
}: CategoriesProps) => {
  // const [selectedCategory, setSelected] = useState<string | null>(null);
  const [displayBeforeTaxes, setDisplayBeforeTaxesLocal] =
    useState<boolean>(false);

  // const handleCategorySelect = (category: string) => {
  //   setSelected(category);
  //   setSelectedCategory(category);
  // };

  const handleToggleBeforeTaxes = () => {
    setDisplayBeforeTaxesLocal(!displayBeforeTaxes);
    setDisplayBeforeTaxes(!displayBeforeTaxes);
  };

  return (
    <>
      <span className="material-symbols-outlined">expand_circle_right</span>
      <div className="main-div-filter-styling">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            src={item.src}
            onClick={() => {
              // const filteredCards = cardsList.filter((card) =>
              //   card.property_type.includes(item.label)
              // );
              setSelectedCategory(item.label);
              // Optionally, you can pass the filtered cards to the parent component if needed
              // handleFilteredCards(filteredCards);
            }}
            // selected={item.label === selectedCategory}
          />
        ))}
      </div>
      <div className="toggle-before-taxes">
        <label>
          Display Before Taxes
          <input
            type="checkbox"
            checked={displayBeforeTaxes}
            onChange={handleToggleBeforeTaxes}
          />
        </label>
      </div>
    </>
  );
};

export default Categories;
