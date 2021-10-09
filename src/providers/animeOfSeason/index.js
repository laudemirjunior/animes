import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const AnimeOfSeasonContext = createContext([]);

export const AnimeOfSeasonProvider = ({ children }) => {
  const [animeOfSeason, setAnimeOfSeason] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    api
      .get("/season/2021/fall")
      .then((response) => setAnimeOfSeason(response.data.anime))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("/top/anime")
      .then((response) => setTopAnime(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimeOfSeasonContext.Provider value={{ animeOfSeason, topAnime }}>
      {children}
    </AnimeOfSeasonContext.Provider>
  );
};
