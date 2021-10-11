import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import Bar from "../../components/bar";
import api from "../../services";
import { Container } from "./styles";

function AnimeInfo() {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  const { title } = useParams();
  const [video, setVideo] = useState([]);
  const [show, setShow] = useState(false);

  const anime = animeOfSeason.find((item) => item.title === title);

  const search = () => {
    if (animeOfSeason.length > 0) {
      api
        .get(`/anime/${anime.mal_id}/videos`)
        .then((response) => setVideo(response.data.promo))
        .then(() => {
          if (video.length > 0) setShow(true);
        });
    }
  };

  useEffect(() => {
    search();
  });

  return (
    <>
      {animeOfSeason.length > 0 && (
        <div>
          <Bar />
          <h1>Title: {anime.title}</h1>
          <Container>
            <div className="image">
              <img style={{ width: "200px" }} src={anime.image_url} alt="" />
            </div>
            <div className="video">
              {show && (
                <iframe
                  border="0"
                  width="530"
                  height="300"
                  title="video"
                  src={video[0].video_url}
                ></iframe>
              )}
            </div>
            <div className="text">
              <p>
                Score:{" "}
                <span>{anime.score === null ? "Unknown" : anime.score}</span>
              </p>
              <p>
                Licensors:
                {Boolean(anime.licensors[0]) === false
                  ? "Unknown"
                  : anime.licensors[0]}
              </p>
              <p>Genres: {anime.genres.map((genre) => `${genre.name}, `)}</p>
              <p>
                Producers:
                {Boolean(anime.producers[0].name) === false
                  ? "Unknown"
                  : anime.producers[0].name}
              </p>
              <p>Synopsis: {anime.synopsis}</p>
              <p>Source: {anime.source}</p>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default AnimeInfo;
