import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppState";

const FilterContext = createContext();

const FilterState = (props) => {
  // Access menu from AppContext
  const { menu } = useContext(AppContext);

  // State to store the search input value
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // State to store the status of the vegetarian filter
  const [isVegFilterActive, setIsVegFilterActive] = useState(false);
  const handleVegFilter = () => {
    setIsVegFilterActive(!isVegFilterActive);
  };
  // State to store the status of the rating filter
  const [rating, setRating] = useState(false);
  const handleRating = () => {
    setRating(!rating);
  };

  // Filter the menu based on search, vegetarian, and rating criteria
  const filterMenuByTitleAndLocation = menu.filter((currElem) => {
    const searchTerm = search.toLowerCase();
    const titleMatch = currElem.title.toLowerCase().includes(searchTerm);
    const locationMatch = currElem.location.toLowerCase().includes(searchTerm);

    // Check if the item is vegetarian and matches the search
    const isVegetarian = isVegFilterActive ? currElem.isVeg : true;

    // Check if the rating is higher than or equal to 4 when the rating filter is active
    const isRatingMatch = !rating || parseFloat(currElem.rating) >= 4;

    // Include the item in the filtered result if all conditions are met
    return titleMatch && locationMatch && isVegetarian && isRatingMatch;
  });
  return (
    // Provide the filtered data and filter handlers to child components
    <FilterContext.Provider
      value={{
        filterMenuByTitleAndLocation,
        search,
        handleSearch,
        isVegFilterActive,
        handleVegFilter,
        handleRating,
        rating,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;
export { FilterContext };
