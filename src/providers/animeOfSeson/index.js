import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const AnimeOfSesonContext = createContext([]);

export const AnimeOfSesonProvider = ({ children }) => {
  const [animeOfSeson, setAnimeOfSeson] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    api
      .get("/season/2021/fall")
      .then((response) => setAnimeOfSeson(response.data.anime))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("/top/anime")
      .then((response) => setTopAnime(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimeOfSesonContext.Provider value={{ animeOfSeson, topAnime }}>
      {children}
    </AnimeOfSesonContext.Provider>
  );
};
