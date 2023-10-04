import React from "react";
import Mainheading from "./components/Mainheading";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay";

const App = () => {
  return (
    <div>
      <Mainheading />
      <Router>
        <Routes>
          <Route path="/" element={<Card />} /> 
          <Route>
            {/* routing to productDisplay component for when click the card we want to see that specific card and the path is that specift data id */}
            <Route path=":id" element={<ProductDisplay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
