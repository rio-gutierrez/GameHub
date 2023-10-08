import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

type GridProps = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: GridProps) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const NUM_OF_SKELETONS_TO_DISPLAY = 24;
  const skeletons = Array.from(
    { length: NUM_OF_SKELETONS_TO_DISPLAY },
    (_, i) => i
  );

  if (error) return <Text> {error} </Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      spacing={6}
      padding={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
