import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import Bar from "../../components/bar";
import api from "../../services";

function AnimeInfo() {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  const { title } = useParams();
  const [video, setVideo] = useState([]);
  const [show, setShow] = useState(false);

  const anime = animeOfSeason.find((item) => item.title === title);

  useEffect(() => {
    api
      .get(`/anime/${anime.mal_id}/videos`)
      .then((response) => setVideo(response.data.promo))
      .then(() => setShow(true));
  }, []);

  return (
    <div>
      <Bar />
      {show && (
        <div>
          <img style={{ width: "200px" }} src={anime.image_url} alt="" />
          <p>Title: {anime.title}</p>
          <p>
            Score: <span>{anime.score === null ? "Unknown" : anime.score}</span>
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
          <iframe
            width="400"
            height="300"
            title="video"
            src={video[0].video_url}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default AnimeInfo;
