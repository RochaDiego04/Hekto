import { ReactNode } from "react";
import ImageSlider from "./Slider/CardSlider";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <header>{children}</header>;
}
