import { useContext } from "react";
import { useParams } from "react-router";
import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import Bar from "../../components/bar";

function AnimeInfo() {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  const { title } = useParams();

  const anime = animeOfSeason.find((item) => item.title === title);

  return (
    <div>
      <Bar />
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
      {/* <p>
        Producers:{" "}
        {Boolean(anime.producers[0].name) === false
          ? "Unknown"
          : anime.producers[0].name}
      </p> */}
      <p>Synopsis: {anime.synopsis}</p>
      <p>Source: {anime.source}</p>
    </div>
  );
}

export default AnimeInfo;
