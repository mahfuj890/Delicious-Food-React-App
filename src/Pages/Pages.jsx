import {  Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Category from "./Category";
import Search from "../Component/Search";
import SearchResult from "./SearchResult";
function Pages() {
  return (
<div>
  <Search />
<Category />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchResult />} />
      </Routes>
      </div>
  );
}

export default Pages;
