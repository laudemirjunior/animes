import { AnimeOfSesonContext } from "../../providers/animeOfSeson";
import { useContext, useState } from "react";
import { Scroll } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bar from "../bar";

const Card = () => {
  const { animeOfSeson } = useContext(AnimeOfSesonContext);
  const [scrollX, setScrollX] = useState(0);
  // console.log(animeOfSeson[0].title);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArroe = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = animeOfSeson.length * (200 + 15);
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
  };

  return (
    <div>
      <Bar />
      <h1>Animes da temporada</h1>
      <Scroll>
        <IoIosArrowBack onClick={handleLeftArrow} />
        <IoIosArrowForward onClick={handleRightArroe} />
        <div style={{ marginLeft: scrollX }}>
          {animeOfSeson.map((item) => {
            return (
              <div>
                <img src={item.image_url} alt="" />
              </div>
            );
          })}
        </div>
      </Scroll>
    </div>
  );
};

export default Card;
