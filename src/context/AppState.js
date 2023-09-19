import { createContext, useState } from "react";
import menuData from "../components/Reusable components/menu/menuData";
import brandData from "../components/delevery/data/brandData";
import foodData from "../components/delevery/data/orderData";
import collectionData from "../components/dining out/collections/collectionData";
const AppContext = createContext();

const AppState = (props) => {
  const [menu, setMenu] = useState(menuData);
  const [brand, setBrand] = useState(brandData);
  const [firstOrder, setFirstOrder] = useState(foodData);
  const [address, setAddress] = useState("");
  const [collection, SetCollection] = useState(collectionData);
  const handleLocation = (e) => {
    setAddress(e.target.value);
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

        collection,
        SetCollection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
export { AppContext };
