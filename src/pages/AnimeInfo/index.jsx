import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Bar from "../../components/bar";
import api from "../../services";
import { Container } from "./styles";

function AnimeInfo() {
  const { id, title } = useParams();
  const [anime, setAnime] = useState([]);
  const [video, setVideo] = useState("");

  useEffect(() => {
    api.get(`/search/anime?q=${title}&page=1&limit=1`).then((response) => {
      setAnime(response.data.results);
    });
  }, []);

  useEffect(() => {
    api
      .get(`/anime/${id}/videos`)
      .then((response) => setVideo(response.data.promo[0].video_url));
  }, []);

  return (
    <>
      {anime.length > 0 && (
        <div>
          <Bar />
          <h1>{anime[0].title}</h1>
          <Container>
            <div className="image">
              <img style={{ width: "200px" }} src={anime[0].image_url} alt="" />
            </div>
            <div className="video">
              {video !== "" && (
                <iframe
                  src={video}
                  title="video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
            <div className="text">
              <p>
                Score:{" "}
                <span>{anime[0].score === 0 ? "N/A" : anime[0].score}</span>
              </p>
              <p>Synopsis: {anime[0].synopsis}</p>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default AnimeInfo;
