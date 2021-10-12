import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "./style";

function SearchCard({ anime }) {
  let history = useHistory();

  function handleClick(item) {
    history.push(`/anime/${item.mal_id}/${item.title}`);
    window.location.reload();
  }

  return (
    <Card onClick={() => handleClick(anime)}>
      <img src={anime.image_url} alt={anime.title} />
      <div>
        <p>{anime.title}</p>
        <span>&#11088; {anime.score === null ? "N/A" : anime.score}</span>
      </div>
    </Card>
  );
}

export default SearchCard;
