import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Scroll, Span, Video, Wallpaper, MainContainer } from "./styles";
import wallpaper from "./wallpaper";
import Carousel from "react-grid-carousel";

const CardAnimeOfSeason = () => {
  const { animeOfSeason, topAnime, manga } = useContext(AnimeOfSeasonContext);
  let history = useHistory();

  function handleClick(item) {
    history.push(`/anime/${item.title}`);
  }

  return (
    <MainContainer>
      <Wallpaper>
        <Video autoPlay loop muted>
          <source src={wallpaper.video} type="video/mp4" />
        </Video>
      </Wallpaper>
      <Scroll>
        <Carousel
          cols={6}
          rows={1}
          gap={10}
          loop={true}
          autoplay={5000}
          responsiveLayout={[
            {
              breakpoint: 1300,
              cols: 5,
            },
            {
              breakpoint: 1100,
              cols: 4,
            },
            {
              breakpoint: 900,
              cols: 3,
            },
            {
              breakpoint: 700,
              cols: 2,
            },
          ]}
          mobileBreakpoint={350}
        >
          {topAnime.map((item) => {
            return (
              <Carousel.Item>
                <div style={{ overflow: "hidden", height: "300px" }}>
                  <img
                    width="200px"
                    height="100%"
                    src={item.image_url}
                    alt=""
                  ></img>
                  <Span>{item.score === null ? "5.0" : item.score}</Span>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Scroll>
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
              breakpoint: 1300,
              cols: 5,
            },
            {
              breakpoint: 1100,
              cols: 4,
            },
            {
              breakpoint: 900,
              cols: 3,
            },
            {
              breakpoint: 700,
              cols: 2,
            },
          ]}
          mobileBreakpoint={350}
        >
          {animeOfSeason.map((item) => {
            return (
              <Carousel.Item>
                <div style={{ overflow: "hidden", height: "300px" }}>
                  <img
                    width="200px"
                    height="100%"
                    onClick={() => handleClick(item)}
                    src={item.image_url}
                    alt=""
                  ></img>
                  <Span>{item.score === null ? "5.0" : item.score}</Span>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Scroll>
      <Scroll>
        <Carousel
          cols={9}
          rows={1}
          gap={10}
          loop={true}
          autoplay={5000}
          responsiveLayout={[
            {
              breakpoint: 1300,
              cols: 8,
            },
            {
              breakpoint: 1100,
              cols: 7,
            },
            {
              breakpoint: 900,
              cols: 5,
            },
            {
              breakpoint: 700,
              cols: 3,
            },
            {
              breakpoint: 400,
              cols: 2,
            },
          ]}
          mobileBreakpoint={250}
        >
          {manga.map((item) => {
            return (
              <Carousel.Item>
                <div style={{ overflow: "hidden", height: "200px" }}>
                  <img
                    width="200px"
                    height="100%"
                    src={item.image_url}
                    alt=""
                  ></img>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Scroll>
    </MainContainer>
  );
};

export default CardAnimeOfSeason;
