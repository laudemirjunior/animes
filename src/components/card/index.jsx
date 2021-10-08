import { AnimeOfSesonContext } from "../../providers/animeOfSeson";
import { useContext, useState } from "react";
import { Scroll } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = () => {
  const { animeOfSeson } = useContext(AnimeOfSesonContext);
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArroe = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = animeOfSeson.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
  };

  console.log(animeOfSeson);

  return (
    <div>
      <h1>Animes da temporada</h1>

      <Scroll>
        <IoIosArrowBack onClick={handleLeftArrow} />
        <IoIosArrowForward onClick={handleRightArroe} />
        <div style={{ marginLeft: scrollX }}>
          {animeOfSeson.map((item) => {
            return (
              <div>
                <Link to={`/anime/${item.title}`}>
                  <img style={{ width: "200px" }} src={item.image_url} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </Scroll>
    </div>
  );
};

export default Card;
