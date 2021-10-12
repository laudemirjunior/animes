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
    if (day === 0) {
      return "monday";
    }
    if (day === 1) {
      return "tuesday";
    }
    if (day === 2) {
      return "wednesday";
    }
    if (day === 3) {
      return "thursday";
    }
    if (day === 4) {
      return "friday";
    }
    if (day === 5) {
      return "saturday";
    }
  };

  useEffect(() => {
    api.get(`/schedule/${seach()}`).then((response) => {
      if (response.data.sunday !== undefined) {
        setCurrentAnimes(response.data.sunday);
      }
      if (response.data.saturday !== undefined) {
        setCurrentAnimes(response.data.saturday);
      }
      if (response.data.tuesday !== undefined) {
        setCurrentAnimes(response.data.tuesday);
      }
      if (response.data.wednesday !== undefined) {
        setCurrentAnimes(response.data.wednesday);
      }
      if (response.data.thursday !== undefined) {
        setCurrentAnimes(response.data.thursday);
      }
      if (response.data.friday !== undefined) {
        setCurrentAnimes(response.data.friday);
      }
      if (response.data.saturday !== undefined) {
        setCurrentAnimes(response.data.saturday);
      }
    });
  }, []);

  return (
    <SearchCurrentAnimesContext.Provider value={{ currentAnimes }}>
      {children}
    </SearchCurrentAnimesContext.Provider>
  );
};
