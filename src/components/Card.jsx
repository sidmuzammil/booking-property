import "./Card.css";
import Maincards from "./Maincards";
import { useState } from "react";
import jsonData from "../items.json";
import { Outlet } from "react-router-dom";

const Card = () => {
  const [items, setItems] = useState(jsonData); // my datas main to a state variable because we want to filter it and pass to Maincard section

  const filterHandler = (categItem) => {  // here the search filter handler working
    const updateItem = jsonData.filter((curElm) => {
      return curElm.category === categItem;
    });

    setItems(updateItem);
  };

  return (
    <div>
      <div className="filter-buttons">
        <div className="filter-map-button">
          <button onClick={() => filterHandler("Newyork")}>Newyork</button>
          <button onClick={() => filterHandler("Mumbai")}>Mumbai</button>
          <button onClick={() => filterHandler("paris")}>paris</button>
          <button onClick={() => filterHandler("London")}>London</button>
        </div>
        <div className="view-all-btn">
          <button>view all</button>
        </div>
      </div>
      {/* pass datas to MainCards for button click filtering  */}
      <Maincards items={items} /> 
      {/* <Outlet/> */}
    </div>
  );
};

export default Card;
