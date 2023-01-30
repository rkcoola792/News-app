import React from "react";
import { Pagination, Stories, Search } from "./Components";

const Home = () => {
  return (
    <>
      <div>Welcome to Rk Tech News</div>

      <Search></Search>
      <Pagination></Pagination>
      <Stories></Stories>
    </>
  );
};

export default Home;
