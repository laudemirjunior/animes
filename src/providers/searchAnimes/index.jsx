import { createContext, useState } from "react";
import api from "../../services";

export const SearchAnimesContext = createContext([]);

export const SearchAnimesProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  function handleSearch(animeName) {
    api
      .get(`/search/anime?q=${animeName}`)
      .then((response) => {
        if (animeName !== "") {
          setAnimes(response.data.results);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <SearchAnimesContext.Provider value={{ animes, handleSearch, setAnimes }}>
      {children}
    </SearchAnimesContext.Provider>
  );
};
