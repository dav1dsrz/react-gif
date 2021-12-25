import { useState } from "react";
import { GifCategory } from "./components/GifCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = function () {
  const [category, setCategory] = useState("vegeta");
  const [limit, setLimit] = useState(25);

  return (
    <>
      <h2>Gif Expert</h2>
      <hr />
      <GifCategory setCategory={setCategory} setLimit={setLimit} />
      <GifGrid category={category} limit={limit} />
    </>
  );
};

export default GifExpertApp;
