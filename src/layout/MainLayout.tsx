import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ImageSlider from "../components/CardSlider/CardSlider";

export default function MainLayout() {
  return (
    <>
      <Header>
        <TopBar />
        <NavBar />
      </Header>
      <Outlet />
    </>
  );
}
