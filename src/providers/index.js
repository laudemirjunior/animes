import { AnimeOfSeasonProvider } from "./animeOfSeason";
import { SearchAnimesProvider } from "./searchAnimes";

export default function Providers({ children }) {
  return (
    <AnimeOfSeasonProvider>
      <SearchAnimesProvider>{children}</SearchAnimesProvider>
    </AnimeOfSeasonProvider>
  );
}
