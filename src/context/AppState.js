import { createContext, useState } from "react";
import menuData from "../components/delevery/menu/menuData";
import brandData from "../components/delevery/top brands/data";
import foorData from "../components/delevery/first order/orderData";
import collectionData from "../components/dining out/collections/collectionData";
const AppContext = createContext();

const AppState = (props) => {
  const [menu, setMenu] = useState(menuData);
  const [brand, setBrand] = useState(brandData);
  const [firstOrder, setFirstOrder] = useState(foorData);
  const [address, setAddress] = useState("Mumbai");
  const [search, setSearch] = useState("");
  const [collection, SetCollection] = useState(collectionData);
  const handleLocation = (e) => {
    setAddress(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [isVegFilterActive, setIsVegFilterActive] = useState(false);
  const handleVegFilter = () => {
    setIsVegFilterActive(!isVegFilterActive);
  };
  const [rating, setRating] = useState(false);
  const handleRating = () => {
    setRating(!rating);
  };
  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        brand,
        setBrand,
        firstOrder,
        setFirstOrder,
        address,
        setAddress,
        handleLocation,
        search,
        setSearch,
        handleSearch,
        collection,
        SetCollection,
        handleVegFilter,
        isVegFilterActive,
        setIsVegFilterActive,
        handleRating,
        rating,
        setRating,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
export { AppContext };
