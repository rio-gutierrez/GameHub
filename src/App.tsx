import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreType } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { PlatformType } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export type GameQuery = {
  genre: GenreType | null;
  platform: PlatformType | null;
  sortOrder: string;
  searchText: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      // To see how to achieve a responsive design for the Grid `templateAreas`
      // using dimensions like `base` and `lg`, check out the ChakraUI documentation
      // [here](https://chakra-ui.com/docs/styled-system/responsive-styles)
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // 1 "fraction". Takes up the whole space
        lg: "200px 1fr", // on large devices we have two columns, the aside column with 200 px
      }} // and the second with the grid taking up the full remaining space
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <VStack align="flex-start" paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </VStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
