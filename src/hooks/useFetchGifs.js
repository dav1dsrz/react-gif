import { useState } from "react";
import { useEffect } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category, limit) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, limit).then((gifs) =>
      setState({ data: gifs, loading: false })
    );
  }, [category, limit]);

  return state;
};
