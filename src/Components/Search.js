import React from "react";
import { useGlobalContext } from "../Context/context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  console.log("Query", query);
  return (
    <>
      <h1>Rk Tech WEB</h1>

      <form action="" onSubmit={(e) => e.preventDefault}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
