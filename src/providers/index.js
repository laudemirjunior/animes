import { AnimeOfSeasonProvider } from "./animeOfSeason";
import { SearchCurrentAnimesProvider } from "./calendary";
import { SearchAnimesProvider } from "./searchAnimes";

export default function Providers({ children }) {
  return (
    <SearchCurrentAnimesProvider>
      <AnimeOfSeasonProvider>
        <SearchAnimesProvider>{children}</SearchAnimesProvider>
      </AnimeOfSeasonProvider>
    </SearchCurrentAnimesProvider>
  );
}
