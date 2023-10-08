import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { PlatformType } from "../hooks/useGames";
import { IconType } from "react-icons";

type IconListProps = {
  platforms: PlatformType[];
};

const PlatformIconList = ({ platforms }: IconListProps) => {
  // map the "slug" (lowercase name/id of each platform) to their respective icons
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe,
  };
  // The `[key: string]` signature above replaces having to call out each individual element
  // on a type to which `iconMap` conforms to. Without using this signature, we would have to do something
  // like `const iconMap: IconMapType`, where
  // type IconMapType = {
  //  pc: string;
  //  playstation: string;
  // ...  and so on....

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
