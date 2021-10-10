import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Scroll, Span } from "./styles";
import Carousel from "react-grid-carousel";

const CardAnimeOfSeason = () => {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  let history = useHistory();

  function handleClick(item) {
    history.push(`/anime/${item.title}`);
  }

  return (
    <Scroll>
      <Carousel
        cols={6}
        rows={1}
        gap={10}
        loop={true}
        autoplay={5000}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        responsiveLayout={[
          {
            breakpoint: 1100,
            cols: 5,
          },
          {
            breakpoint: 900,
            cols: 4,
          },
          {
            breakpoint: 700,
            cols: 3,
          },
          {
            breakpoint: 500,
            cols: 2,
          },
        ]}
        mobileBreakpoint={350}
      >
        {animeOfSeason.map((item) => {
          return (
            <Carousel.Item onClick={() => handleClick(item)}>
              <img
                width="100%"
                height="300px"
                src={item.image_url}
                alt=""
              ></img>
              <Span>{item.score === null ? "5.0" : item.score}</Span>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Scroll>
  );
};

export default CardAnimeOfSeason;
