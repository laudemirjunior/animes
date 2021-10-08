import { useContext } from "react";
import { useParams } from "react-router";
import { AnimeOfSesonContext } from "../../providers/animeOfSeson";
import { Link } from "react-router-dom";

function AnimeInfo() {
  const { animeOfSeson } = useContext(AnimeOfSesonContext);
  const { title } = useParams();

  const anime = animeOfSeson.find((item) => item.title === title);

  return (
    <div>
      <img style={{ width: "200px" }} src={anime.image_url} alt="" />
      <p>Title: {anime.title}</p>
      <p>
        Score: <span>{anime.score === null ? "Unknown" : anime.score}</span>
      </p>
      <p>
        Licensors:{" "}
        {Boolean(anime.licensors[0]) === false ? "Unknown" : anime.licensors[0]}
      </p>
      <p>Genres: {anime.genres.map((genre) => `${genre.name}, `)}</p>
      <p>Producers: {anime.producers[0].name}</p>
      <p>Synopsis: {anime.synopsis}</p>
      <p>Source: {anime.source}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default AnimeInfo;
