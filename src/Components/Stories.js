import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/context";
const Stories = () => {
  const { hits, nbPages,isLoading } = useGlobalContext();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Rk Tech News Post</h1>
      {hits.map((currPost) => {
        return (
          <>
            <h2>{currPost.title}</h2>
            {/* <h4> {currPost.author}</h4> */}
          </>
        );
      })}
    </>
  );
};

export default Stories;
