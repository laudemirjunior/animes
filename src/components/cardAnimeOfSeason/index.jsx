import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Scroll, Span, Video, Wallpaper, MainContainer } from "./styles";
import banner from "./banner";
import Slider from "react-slick";
import { SearchCurrentAnimesContext } from "../../providers/calendary";

const CardAnimeOfSeason = () => {
  const { animeOfSeason, topAnime, manga } = useContext(AnimeOfSeasonContext);
  const { currentAnimes } = useContext(SearchCurrentAnimesContext);

  let history = useHistory();

  function handleClick(item) {
    if (drag === false) {
      history.push(`/anime/${item.mal_id}/${item.title}`);
    }
    return;
  }

  let drag = false;

  document.addEventListener("mousedown", () => (drag = false));

  document.addEventListener("mousemove", () => (drag = true));

  let settings = {
    speed: 400,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainContainer>
      <Wallpaper onChange={(e) => console.log(e.current.focus())}>
        <Video src={banner.video} />
      </Wallpaper>
      <h1>Animes of day</h1>
      <Scroll>
        <Slider {...settings}>
          {currentAnimes.map((item) => {
            return (
              <div
                style={{
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "320px",
                }}
              >
                <img
                  onClick={() => handleClick(item)}
                  width="100%"
                  height="330px"
                  src={item.image_url}
                  alt=""
                ></img>
                <Span>{item.score === null ? "N/A" : item.score}</Span>
              </div>
            );
          })}
        </Slider>
      </Scroll>
      <h1>Top</h1>
      <Scroll>
        <Slider {...settings}>
          {topAnime.map((item) => {
            return (
              <div
                style={{
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "320px",
                }}
              >
                <img
                  onClick={() => handleClick(item)}
                  width="100%"
                  height="330px"
                  src={item.image_url}
                  alt=""
                ></img>
                <Span>{item.score === null ? "N/A" : item.score}</Span>
              </div>
            );
          })}
        </Slider>
      </Scroll>
      <h1>Season</h1>
      <Scroll>
        <Slider {...settings}>
          {animeOfSeason.map((item) => {
            return (
              <div
                style={{
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "320px",
                }}
              >
                <img
                  onClick={() => handleClick(item)}
                  width="100%"
                  height="330px"
                  src={item.image_url}
                  alt=""
                ></img>
                <Span>{item.score === null ? "N/A" : item.score}</Span>
              </div>
            );
          })}
        </Slider>
      </Scroll>
      <h1>Mangá</h1>
      <Scroll>
        <Slider {...settings}>
          {manga.map((item) => {
            return (
              <div
                style={{
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "320px",
                }}
              >
                <img
                  onClick={() => handleClick(item)}
                  width="100%"
                  height="330px"
                  src={item.image_url}
                  alt=""
                ></img>
                <Span>{item.score === null ? "N/A" : item.score}</Span>
              </div>
            );
          })}
        </Slider>
      </Scroll>
    </MainContainer>
  );
};

export default CardAnimeOfSeason;
