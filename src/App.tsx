import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      // To see how to achieve a responsive design for the Grid `templateAreas`
      // using dimensions like `base` and `lg`, check out the ChakraUI documentation
      // [here](https://chakra-ui.com/docs/styled-system/responsive-styles)
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        {" "}
        Main{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
