import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Scroll } from "./styles";
import Slider from "react-slick";

const CardAnimeOfSeason = () => {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  let history = useHistory();

  function handleClick(item) {
    history.push(`/anime/${item.title}`);
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: "50px",
    prevArrow: <BsFillArrowLeftCircleFill />,
    nextArrow: <BsArrowRightCircleFill />,
    responsive: [
      {
        breakpoint: 1300,
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      {
        breakpoint: 300,
        settings: "unslick",
      },
    ],
  };

  return (
    <Scroll>
      <Slider {...settings}>
        {animeOfSeason.map((item) => {
          return (
            <div onClick={() => handleClick(item)}>
              <img
                width="200px"
                height="300px"
                src={item.image_url}
                alt=""
              ></img>
              <span>{item.score === null ? "5.0" : item.score}</span>
            </div>
          );
        })}
      </Slider>
    </Scroll>
  );
};

export default CardAnimeOfSeason;
