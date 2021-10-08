import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext, useState } from "react";
import { Scroll } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CardAnimeOfSeason = () => {
  const { animeOfSeason, topAnime } = useContext(AnimeOfSeasonContext);
  const [scrollX, setScrollX] = useState(0);
  console.log(animeOfSeson);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = animeOfSeason.length * (200 + 55);
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
  };

  console.log(animeOfSeason);

  return (
    <div>
      <h1>Animes da temporada</h1>
      <Scroll>
        <IoIosArrowBack onClick={handleLeftArrow} />
        <IoIosArrowForward onClick={handleRightArrow} />
        <div style={{ marginLeft: scrollX }}>
          {animeOfSeason.map((item) => {
            return (
              <div>
                <Link to={`/anime/${item.title}`}>
                  <img style={{ width: "200px" }} src={item.image_url} alt="" />
                  <div>{item.score === null ? "5.0" : item.score}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </Scroll>
    </div>
  );
};

export default CardAnimeOfSeason;
