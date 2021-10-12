import { Card } from "./style";

function SearchCard({ anime: { image_url, title, score } }) {
  return (
    <Card>
      <img src={image_url} alt={title} />
      <div>
        <p>{title}</p>
        <span>&#11088; {score === null ? "N/A" : score}</span>
      </div>
    </Card>
  );
}

export default SearchCard;
