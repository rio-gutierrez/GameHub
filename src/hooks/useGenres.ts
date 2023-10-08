import useData from "./useData";

// the schema for the Genre type and the corresponding response
// can be found here: https://api.rawg.io/docs/#tag/genres
export type GenreType = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => useData<GenreType>("/genres");

export default useGenres;
