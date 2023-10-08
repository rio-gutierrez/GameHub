import { GameQuery } from "../App";
import useData from "./useData";

// the schema for the Game type and the corresponding response
// can be found here: https://api.rawg.io/docs/#operation/games_list
export type PlatformType = {
  id: number;
  name: string;
  slug: string;
};

export type GameType = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformType }[]; // terrible design from RAWG's part here
  metacritic: number;
};

const useGames = (gameQuery: GameQuery) =>
  useData<GameType>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
