import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Bar from "../../components/bar";
import api from "../../services";
import { Container } from "./styles";

function AnimeInfo() {
  const { title } = useParams();
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api
      .get(`/search/anime?q=${title}`)
      .then((response) => {
        if (title !== "") {
          setAnimes(response.data.results);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const anime = animes.find((item) => item.title === title);

  useEffect(() => {
    if (anime !== undefined) {
      api
        .get(`/anime/${anime.mal_id}/videos`)
        .then((response) => setVideo(response.data.promo))
        .then(() => {
          if (video !== undefined) setShow(true);
        });
    }
  }, []);

  return (
    <>
      {anime !== undefined && (
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
