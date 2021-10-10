import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const AnimeOfSeasonContext = createContext([]);

export const AnimeOfSeasonProvider = ({ children }) => {
  const [animeOfSeason, setAnimeOfSeason] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [manga, setManga] = useState([]);

  useEffect(() => {
    async function search() {
      await api
        .get("/season/2021/fall")
        .then((response) => setAnimeOfSeason(response.data.anime));
    }
    search();
  }, []);

  useEffect(() => {
    api.get("/top/anime").then((response) => setTopAnime(response.data.top));
  }, []);

  useEffect(() => {
    api
      .get("/manga/1/recommendations")
      .then((response) => setManga(response.data.recommendations));
  }, []);

  return (
    <AnimeOfSeasonContext.Provider value={{ animeOfSeason, topAnime, manga }}>
      {children}
    </AnimeOfSeasonContext.Provider>
  );
};
