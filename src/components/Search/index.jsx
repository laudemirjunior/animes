import { useContext, useState } from "react";
import { SearchAnimesContext } from "../../providers/searchAnimes";
import SearchCard from "../SearchCard";
import { Container, Input, MainContainer } from "./style";

function Search() {
  const { handleSearch, animes, setAnimes } = useContext(SearchAnimesContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <MainContainer>
        <Input
          show={show}
          type="text"
          placeholder="Pesquise um anime"
          onFocus={() => setShow(true)}
          // onBlur={(evt) => {
          //   if (evt.target.value === "") {
          //     setAnimes([]);
          //     setShow(false);
          //     if (evt.target.value !== "") {
          //       handleSearch(evt.target.value);
          //     }
          //   } else {
          //     setShow(false);
          //   }
          // }}
          onChange={(evt) =>
            evt.target.value !== "" && handleSearch(evt.target.value)
          }
        />

        {show && (
          <Container>
            {animes.map((anime, index) => (
              <>
                <SearchCard key={index} anime={anime} />
              </>
            ))}
          </Container>
        )}
      </MainContainer>
    </>
  );
}

export default Search;
