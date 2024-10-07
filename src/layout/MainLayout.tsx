import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header>
        <TopBar />
        <NavBar />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
