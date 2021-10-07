import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const AnimeOfSesonContext = createContext([]);

export const AnimeOfSesonProvider = ({ children }) => {
  const [animeOfSeson, setAnimeOfSeson] = useState([]);

  useEffect(() => {
    api
      .get("/season/2021/fall")
      .then((response) => setAnimeOfSeson(response.data.anime))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimeOfSesonContext.Provider value={{ animeOfSeson }}>
      {children}
    </AnimeOfSesonContext.Provider>
  );
};
