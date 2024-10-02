import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <NavBar />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
