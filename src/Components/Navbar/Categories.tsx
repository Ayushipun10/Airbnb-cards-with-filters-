// import React, { useState } from "react";
// import CategoryBox from "./CategoryBox";
// import { categories } from "../Utils/Label";
// import "./Category.css";
// import { IoIosArrowDropleft , IoIosArrowDropright} from "react-icons/io";

// interface CategoriesProps {
//   setSelectedCategory: (category: string | null) => void;
//   setDisplayBeforeTaxes: React.Dispatch<React.SetStateAction<boolean>>;
//   cardsList: any[];
// }

// const Categories = ({
//   setSelectedCategory,
//   setDisplayBeforeTaxes,
//   cardsList,
// }: CategoriesProps) => {
//   // const [selectedCategory, setSelected] = useState<string | null>(null);
//   const [displayBeforeTaxes, setDisplayBeforeTaxesLocal] =
//     useState<boolean>(false);

//     const [visibleIconsStart, setVisibleIconsStart] = useState<number>(0);

//   // const handleCategorySelect = (category: string) => {
//   //   setSelected(category);
//   //   setSelectedCategory(category);
//   // };

//   const handleToggleBeforeTaxes = () => {
//     setDisplayBeforeTaxesLocal(!displayBeforeTaxes);
//     setDisplayBeforeTaxes(!displayBeforeTaxes);
//   };

//   const handleMoveIconsLeft = () => {
//     setVisibleIconsStart((prevStart) => Math.max(0, prevStart - 1));
//   };


//   const handleMoveIconsRight = () => {
//     setVisibleIconsStart((prevStart) =>
//       Math.min(categories.length - 1, prevStart + 1)
//     );
//   };

//   return (
//     <>
     
//       <div className="main-div-filter-styling">
//       <IoIosArrowDropleft className="arrow-slider-styling" onClick={handleMoveIconsLeft}/>
//         {categories.map((item) => (
//           <CategoryBox
//             key={item.label}
//             label={item.label}
//             src={item.src}
//             onClick={() => {
//               // const filteredCards = cardsList.filter((card) =>
//               //   card.property_type.includes(item.label)
//               // );
//               setSelectedCategory(item.label);
//               // Optionally, you can pass the filtered cards to the parent component if needed
//               // handleFilteredCards(filteredCards);
//             }}
//             // selected={item.label === selectedCategory}
//           />
//         ))}
//         <IoIosArrowDropright className="arrow-slider-styling" onClick={handleMoveIconsRight}/>
//       </div>
      
//       <div className="toggle-before-taxes">
//         <label>
//           Display Before Taxes
//           <input
//             type="checkbox"
//             checked={displayBeforeTaxes}
//             onChange={handleToggleBeforeTaxes}
//           />
//         </label>
//       </div>
    
//     </>
//   );
// };

// export default Categories;
import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "../Utils/Label";
import "./Category.css";
import { CiCircleChevLeft,CiCircleChevRight } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";

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
  const [displayBeforeTaxes, setDisplayBeforeTaxesLocal] =
    useState<boolean>(false);
  const [visibleIconsStart, setVisibleIconsStart] = useState<number>(0);
  const [selectedCategory, setSelectedCategoryLocal] = useState<string | null>(
    null
  );

  const handleToggleBeforeTaxes = () => {
    setDisplayBeforeTaxesLocal(!displayBeforeTaxes);
    setDisplayBeforeTaxes(!displayBeforeTaxes);
  };

  const handleMoveIconsLeft = () => {
    setVisibleIconsStart((prevStart) => Math.max(0, prevStart - 1));
  };

  const handleMoveIconsRight = () => {
    setVisibleIconsStart((prevStart) =>
      Math.min(categories.length - 1, prevStart + 1)
    );
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategoryLocal(category);
    setSelectedCategory(category);
  };
  return (
    <div className="categories-container">
      <div className="slider-icons-container">
        <CiCircleChevLeft
          className={`arrow-slider-styling left-arrow ${visibleIconsStart === 0 ? 'hidden' : ''}`}
          onClick={handleMoveIconsLeft}
        />
        <div className="slider-bar">
          <div
            className="slider-icons"
            style={{
              transform: `translateX(-${visibleIconsStart * 100}%)`,
              display: "flex",
              width: "70%",
            }}
          >
            {categories.map((item) => (
              <CategoryBox
                key={item.label}
                label={item.label}
                src={item.src}
                onClick={() => handleCategorySelect(item.label)}
                selected={item.label === selectedCategory}
              />
            ))}
          </div>
        </div>
        <CiCircleChevRight
          className="arrow-slider-styling right-arrow"
          onClick={handleMoveIconsRight}
        />
      </div>

     

      <div className="filters-button">
          {/* Add your filter button here */}
          <button className="filters-button-styling"><CiSliderHorizontal/>Filters</button>
        </div>

        <div className="toggle-before-taxes">
        <div className="display-before-taxes-text-div">
          Display total before taxes
        </div>
        <div className={`slider-toggle ${displayBeforeTaxes ? 'active' : ''}`} onClick={handleToggleBeforeTaxes}>
          <div className="slider-circle"></div>
        </div>
        </div>

       
      </div>
    
  );
};

export default Categories;
