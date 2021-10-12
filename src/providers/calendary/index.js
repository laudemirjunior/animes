import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import api from "../../services";

export const SearchCurrentAnimesContext = createContext([]);

export const SearchCurrentAnimesProvider = ({ children }) => {
  const [currentAnimes, setCurrentAnimes] = useState([]);

  const seach = () => {
    let currentDate = new Date();
    let day = currentDate.getDay();
    if (day === 0) {
      return "sunday";
    }
    if (day === 1) {
      return "monday";
    }
    if (day === 2) {
      return "tuesday";
    }
    if (day === 3) {
      return "wednesday";
    }
    if (day === 4) {
      return "thursday";
    }
    if (day === 5) {
      return "friday";
    }
    if (day === 6) {
      return "saturday";
    }
  };

  useEffect(() => {
    api.get(`/schedule/${seach()}`).then((response) => {
      setCurrentAnimes(response.data.tuesday);
    });
  }, []);

  return (
    <SearchCurrentAnimesContext.Provider value={{ currentAnimes, seach }}>
      {children}
    </SearchCurrentAnimesContext.Provider>
  );
};
