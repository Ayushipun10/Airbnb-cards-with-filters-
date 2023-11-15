//====== WORKING CODE ======//

// FilterModal.tsx
import React, { useEffect, useState } from "react";
// import './FilterModal.scss'; // Import your SCSS file
import "./Filter.scss";
import "./BarGraph.scss";
import "./Button";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHotel,
  faHouse,
  faTreeCity,
} from "@fortawesome/free-solid-svg-icons";
import dbjson from "../../card-data.json";

interface FilterModalProps {
  onClose: () => void;
  data: number[];
  header: string;
  heading1: string;
  heading2: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
  onClose,
  data,
  header,
  heading1,
  heading2,
}) => {
  // const Filter = ({ onApply, onClear }) => {
  //   const [selectedCategory, setSelectedCategory] = useState(null);
  //   const [selectedColor, setSelectedColor] = useState(null);

  //   const handleApplyFilters = () => {
  //     // Apply filters to the dataset
  //     const filteredItems = allItems.filter((item) => {
  //       return (
  //         (!selectedCategory || item.category === selectedCategory) &&
  //         (!selectedColor || item.color === selectedColor)
  //         // Add more conditions for additional filters
  //       );
  //     });

  //     // Call the onApply callback with the filtered items
  //     onApply(filteredItems);
  //   };

  //   const handleClearFilters = () => {
  //     // Clear all selected filters
  //     setSelectedCategory(null);
  //     setSelectedColor(null);
  //     // Clear additional filters if needed

  //     // Call the onClear callback
  //     onClear();
  //   };
  // };
  //   const [filteredData, setFilteredData] = useState(dbjson)
  //  const [selectedEssentials , setSelectedEssentials] = useState<string[]>([]);
  //  const [selectedFeatures , setSelectedFeatures] = useState<string | null>(null);
  //  const [selectedLocation , setSelectedLocation] = useState<string | null>(null);
  //  const [selectedSafety , setSelectedSafety] = useState<string | null>(null);

  // const applyFilters = () => {
  //   const filterData = dbjson.filter((item: any) => {
  //     const meetsEssentialsFilter =
  //       // item.essentials &&
  //       // item.essentials.filter(() => {
  //       //   for(var i=0; i<=item.essentials.length; i++){

  //       //   }
  //       // })
  //       item.essentials.filter((essential: string) =>
  //         selectedEssentials.includes(essential)
  //       );

  //       // console.log(item)
  //       // console.log(item.essentials)
  //       console.log(selectedEssentials)
  //       console.log(meetsEssentialsFilter)

  //     // const meetsFeaturesFilter =
  //     //   item.features &&
  //     //   item.features.every((feature: string) =>
  //     //     selectedFeatures?.includes(feature)
  //     //   );

  //     // const meetsLocationFilter =
  //     //   item["location-view"] && selectedLocation === item["location-view"];

  //     // const meetsSafetyFilter =
  //     //   item.safety &&
  //     //   item.safety.every((safety: string) => selectedSafety?.includes(safety));

  //     // Modify these conditions based on your specific filter criteria

  //     return (
  //       meetsEssentialsFilter
  //       // meetsFeaturesFilter &&
  //       // meetsLocationFilter &&
  //       // meetsSafetyFilter
  //     );
  //   });

  //   // Call the onApply callback with the filtered items
  //   setFilteredData(filterData);
  //   console.log("apply button is triggered")
  //   console.log(filterData)

  // };

  const allEssentialsCheckboxOptions = [
    "Wifi",
    "Kitchen",
    "Washing Machine",
    "Dryer",
    "Air Conditioning",
    "Heating",
    "Dedicated workspace",
    "TV",
    "Hair dryer",
    "Iron",
  ];

  const allFeaturesCheckboxOptions = [
    "Pool",
    "Hot tub",
    "Free parking",
    "EV charger",
    "Cot",
    "King bed",
    "Gym",
    "BBQ grill",
    "Breakfast",
    "Indoor fireplace",
    "Smoking allowed",
  ];

  const allLocationCheckboxOptions = ["Waterfront"];

  const allSafetyCheckboxOptions = ["Smoke alarm", "Carbon monoxide alarm"];

  const [visibleEssentialsCheckboxes, setVisibleEssentialsCheckboxes] =
    useState<number>(6); // Number of checkboxes to initially display
  const [visibleFeaturesCheckboxes, setVisibleFeaturesCheckboxes] =
    useState<number>(0);
  const [visibleLocationCheckboxes, setVisibleLocationCheckboxes] =
    useState<number>(0);
  const [visibleSafetyCheckboxes, setVisibleSafetyCheckboxes] =
    useState<number>(0);
  const [showMoreAmenities, setShowMoreAmenities] = useState<boolean>(true);

  const allGuestEntranceCheckboxOptions = [
    "Step-free guest entrance",
    "Guest entrance wider than 32 inches (81 centimetres)",
    "Accessible parking spot",
    "Step-free path to the guest entrance",
  ];

  const allBedroomFeatureCheckboxOptions = [
    "Step-free bedroom access",
    "Bedroom entrance wider than 32 inches (81 centimetres)",
  ];

  const allBathroomFeatureCheckboxOptions = [
    "Step-free bathroom access",
    "Bathroom entrance wider than 32 inches (81 centimetres)",
    "Shower grab bar",
    "Toilet grab bar",
    "Step-free shower",
    "Shower or bath chair",
  ];

  const allEquipementCheckboxOptions = ["Ceiling or mobile hoist"];

  const [visibleGuestEntranceCheckboxes, setVisibleGuestEntranceCheckboxes] =
    useState<number>(6); // Number of checkboxes to initially display
  const [visibleBedroomFeatureCheckboxes, setVisibleBedroomFeatureCheckboxes] =
    useState<number>(0);
  const [
    visibleBathroomFeatureCheckboxes,
    setVisibleBathroomFeatureCheckboxes,
  ] = useState<number>(0);
  const [visibleEquipementCheckboxes, setVisibleEquipementCheckboxes] =
    useState<number>(0);
  const [showMoreAccessibility, setShowMoreAccessibility] =
    useState<boolean>(true);

  const allLanguageCheckboxOptions = [
    "English",
    "French",
    "German",
    "Japanese",
    "Russian",
    "Spanish",
    "Chinese (Simplified)",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Indonesian",
    "Dutch",
    "Bengali",
    "Thai",
    "Punjabi",
    "Greek",
    "Hebrew",
    "Polish",
    "Danish",
    "Swedish",
    "Ukrainian",
  ];

  const [visibleLanguageCheckboxes, setVisibleLanguageCheckboxes] =
    useState<number>(6);

  const [showMoreLanguages, setShowMoreLanguages] = useState<boolean>(true);

  const [minPrice, setMinPrice] = useState(830);
  const [maxPrice, setMaxPrice] = useState(25000);
  const [beds, setBeds] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const [selectedBedCount, setSelectedBedCount] = useState<
    number | string | null
  >(null);

  const handleBedButtonClick = (
    count: number | string | null,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedBedCount(count);
    setBeds(Number(e.target.value));
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleBedroomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedroom(Number(e.target.value));
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBathrooms(Number(e.target.value));
  };

  const handleAmenitiesShowMore = () => {
    setVisibleEssentialsCheckboxes(allEssentialsCheckboxOptions.length); // Increase the number of visible checkboxes
    setVisibleFeaturesCheckboxes(allFeaturesCheckboxOptions.length);
    setVisibleLocationCheckboxes(allLocationCheckboxOptions.length);
    setVisibleSafetyCheckboxes(allSafetyCheckboxOptions.length);
    setShowMoreAmenities(false);
  };

  const handleAmenitiesShowLess = () => {
    setVisibleEssentialsCheckboxes(6);
    setVisibleFeaturesCheckboxes(0);
    setVisibleLocationCheckboxes(0);
    setVisibleSafetyCheckboxes(0);
    setShowMoreAmenities(true);
  };

  const handleAccessibiltyShowMore = () => {
    setVisibleGuestEntranceCheckboxes(allGuestEntranceCheckboxOptions.length); // Increase the number of visible checkboxes
    setVisibleBedroomFeatureCheckboxes(allBedroomFeatureCheckboxOptions.length);
    setVisibleBathroomFeatureCheckboxes(
      allBathroomFeatureCheckboxOptions.length
    );
    setVisibleEquipementCheckboxes(allEquipementCheckboxOptions.length);
    setShowMoreAccessibility(false);
  };

  const handleAccessibiltyShowLess = () => {
    setVisibleGuestEntranceCheckboxes(6); // Increase the number of visible checkboxes
    setVisibleBedroomFeatureCheckboxes(0);
    setVisibleBathroomFeatureCheckboxes(0);
    setVisibleEquipementCheckboxes(0);
    setShowMoreAccessibility(true);
  };

  const handleLanguageShowMore = () => {
    setVisibleLanguageCheckboxes(allLanguageCheckboxOptions.length); // Increase the number of visible checkboxes

    setShowMoreLanguages(false);
  };

  const handleLanguageShowLess = () => {
    setVisibleLanguageCheckboxes(6);

    setShowMoreLanguages(true);
  };

  const essentialsColums1 = allEssentialsCheckboxOptions.slice(
    0,
    visibleEssentialsCheckboxes
  );

  

  const guestColums1 = allGuestEntranceCheckboxOptions.slice(
    0,
    visibleGuestEntranceCheckboxes
  );

  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/cards"); // Adjust the endpoint based on your db.json structure
        const jsondata = await response.json();
        setMockData(jsondata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedEssentials, setSelectedEssentials] = useState<string[]>([]);

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedEssentials((prevSelectedEssentials) => {
      if (isChecked) {
        return [...prevSelectedEssentials, value];
      } else {
        return prevSelectedEssentials.filter((item) => item !== value);
      }
    });
  };

  const applyFilters = () => {
    const filteredData = dbjson.filter((item) => {
      return selectedEssentials.every((essential) =>
        item.essentials.includes(essential)
      );
    });

    console.log(filteredData);
  };

  return (
    <div className="filter-modal">
      <div className="filter-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h4>{header}</h4>
        </div>
        <div className="body">
          <div className="places">
            <h3>Type of Place</h3>
            <p>Search rooms, entire homes or any type of place.</p>
            <Button count="Any" />
            <Button count="Rooms" />
            <Button count="Entire home" />
            {/* {places.map((places, index) => (
        <Button key={index} count={places} />
        ))} */}
          </div>
          <div className="price-range">
            <h3>{heading1}</h3>

            <div className="bar-graph">
              {data.map((value, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>

            <div className="filter-options">
              <div className="graph-bar">
                <input
                  type="range"
                  min={830}
                  max={25000}
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  step={1}
                />
                <input
                  type="range"
                  min={830}
                  max={25000}
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  step={1}
                />
              </div>
              <div className="range-values">
                <p>Min: {minPrice}</p>
                <p>Max: {maxPrice}</p>
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                ></input>
              </div>
            </div>
          </div>

          <div className="rooms">
            <h3>{heading2}</h3>
            <div className="bathrooms-filter">
              <span>Bedrooms</span>
              <Button
                className="bedroom-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={1}
                selected={selectedBedCount === 1}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={2}
                selected={selectedBedCount === 2}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={3}
                selected={selectedBedCount === 3}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={4}
                selected={selectedBedCount === 4}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={5}
                selected={selectedBedCount === 5}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={6}
                selected={selectedBedCount === 6}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count={7}
                selected={selectedBedCount === 7}
                onClick={() => handleBedroomChange}
              />
              <Button
                className="bedroom-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                onClick={() => handleBedroomChange}
              />
            </div>
            <div className="beds-filter">
              <span>Beds</span>
              <Button
                className="bed-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={1}
                selected={selectedBedCount === 1}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={2}
                selected={selectedBedCount === 2}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={3}
                selected={selectedBedCount === 3}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={4}
                selected={selectedBedCount === 4}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={5}
                selected={selectedBedCount === 5}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={6}
                selected={selectedBedCount === 6}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count={7}
                selected={selectedBedCount === 7}
                onClick={() => handleBedButtonClick}
              />
              <Button
                className="bed-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                onClick={() => handleBedButtonClick}
              />
            </div>
            <div className="bathrooms-filter">
              <span>Bathrooms</span>
              <Button
                className="bathroom-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={1}
                selected={selectedBedCount === 1}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={2}
                selected={selectedBedCount === 2}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={3}
                selected={selectedBedCount === 3}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={4}
                selected={selectedBedCount === 4}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={5}
                selected={selectedBedCount === 5}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={6}
                selected={selectedBedCount === 6}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count={7}
                selected={selectedBedCount === 7}
                onClick={() => handleBathroomsChange}
              />
              <Button
                className="bathroom-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                onClick={() => handleBathroomsChange}
              />
            </div>
          </div>
          <div className="property-type">
            <h3>Property-type</h3>
            <div>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#050505" }} />
              <Button count="House" />
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} style={{ color: "#000000" }} />
              {/* <FontAwesomeIcon icon={faApartment} style={{color: "#000000",}} /> */}
              <Button count="Flat" />
            </div>
            <div>
              <FontAwesomeIcon icon={faTreeCity} style={{ color: "#000000" }} />
              {/* <FontAwesomeIcon icon={faHouseBuilding} style={{color: "#000000",}} /> */}
              <Button count="Guest house" />
            </div>
            <div>
              <FontAwesomeIcon icon={faHotel} style={{ color: "#000000" }} />
              <Button count="Hotel" />
            </div>
          </div>
          <div className="amenities">
            <h3>Amenities</h3>
            <h5>Essentials</h5>
            <div className="amenities-body">
              <div className="essentials">
                <div className="grid-columns">
                  {essentialsColums1.map((option, index) => (
                    <label key={index} className="container">
                      {option}
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedEssentials.includes(option)}
                        onChange={handleCheckboxChange1}
                      />
                      <span className="checkmark"></span>
                      {/* <input type="checkbox" />
                      <span className="checkmark"></span> */}
                    </label>
                  ))}
                  {/* {dbjson.essentials.map((essential) => (
                    <div key={essential}>
                      <label>
                        <input
                          type="checkbox"
                          value={essential}
                          checked={selectedEssentials.includes(essential)}
                          onChange={handleCheckboxChange}
                        />
                        {essential}
                      </label>

                    </div>
                  ))} */}
                </div>
                {!showMoreAmenities && (
                  <>
                    <div className="features">
                      <h5>Features</h5>
                      <div className="grid-columns">
                        {allFeaturesCheckboxOptions
                          .slice(0, visibleFeaturesCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="location">
                      <h5>Location</h5>
                      <div className="grid-columns">
                        {allLocationCheckboxOptions
                          .slice(0, visibleLocationCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="safety">
                      <h5>Safety</h5>
                      <div className="grid-columns">
                        {allSafetyCheckboxOptions
                          .slice(0, visibleSafetyCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="buttons-container">
                  {showMoreAmenities && (
                    <button
                      className="show-more"
                      onClick={handleAmenitiesShowMore}
                    >
                      Show More
                    </button>
                  )}

                  {!showMoreAmenities && (
                    <button
                      className="show-less"
                      onClick={handleAmenitiesShowLess}
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="booking-options">
              <h3>Booking Options</h3>
              <div className="options">
                <div>
                  <p>Instant Book</p>
                  <p>Listings you can book without waiting for host approval</p>
                </div>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="options">
                <div>
                  <p>Self check-in</p>
                  <p>Easy access to the property once you arrive</p>
                </div>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="options">
                <div>
                  <p>Allows pets</p>
                  <p>Bringing a service animal?</p>
                </div>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="amenities">
              <h3>Accessibility Feature</h3>
              <h5>Guest entrance and parking</h5>
              <div className="amenities-body">
                <div className="essentials">
                  <div className="grid-columns">
                    {guestColums1.map((option, index) => (
                      <label key={index} className="container">
                        {option}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    ))}
                  </div>
                </div>
                {!showMoreAccessibility && (
                  <>
                    <div className="features">
                      <h5>Bedroom</h5>
                      <div className="grid-columns">
                        {allBedroomFeatureCheckboxOptions
                          .slice(0, visibleBedroomFeatureCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="location">
                      <h5>Bathroom</h5>
                      <div className="grid-columns">
                        {allBathroomFeatureCheckboxOptions
                          .slice(0, visibleBathroomFeatureCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="safety">
                      <h5>Adaptive equipment</h5>
                      <div className="grid-columns">
                        {allEquipementCheckboxOptions
                          .slice(0, visibleEquipementCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="buttons-container">
                  {showMoreAccessibility && (
                    <button
                      className="show-more"
                      onClick={handleAccessibiltyShowMore}
                    >
                      Show More
                    </button>
                  )}

                  {!showMoreAccessibility && (
                    <button
                      className="show-less"
                      onClick={handleAccessibiltyShowLess}
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="amenities">
              <h3>Host Languages</h3>
              <div className="grid-columns">
                {allLanguageCheckboxOptions
                  .slice(0, visibleLanguageCheckboxes)
                  .map((option, index) => (
                    <label key={index} className="container">
                      {option}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  ))}
              </div>
              <div className="buttons-container">
                {showMoreLanguages && (
                  <button
                    className="show-more"
                    onClick={handleLanguageShowMore}
                  >
                    Show More
                  </button>
                )}

                {!showMoreLanguages && (
                  <button
                    className="show-less"
                    onClick={handleLanguageShowLess}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button className="apply" onClick={onClose}> */}
            <button className="apply" onClick={applyFilters}>
              Apply Filters
            </button>
            <button className="apply" onClick={onClose}>
              Close
            </button>
            {/* <button className="apply" onClick={applyFilters}> */}
            {/* <button onClick={handleApplyFilters}>Apply</button> */}
            {/* <button onClick={handleClearFilters}>Clear</button> */}
            {/* Apply
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

//====== WORKING CODE ENDS ======//