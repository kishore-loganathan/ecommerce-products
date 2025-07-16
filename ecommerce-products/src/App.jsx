import React from "react";
import { Routes, Route} from "react-router-dom";
import ProductList from "./pages/ProductList";
import {Navbar} from "./navbar/Navbar.jsx";
const App = () => {
  return (
    <div>
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};
export default App;
