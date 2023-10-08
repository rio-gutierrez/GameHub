import useData from "./useData";

type PlatformType = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => useData<PlatformType>("/platforms/lists/parents");

export default usePlatforms;
