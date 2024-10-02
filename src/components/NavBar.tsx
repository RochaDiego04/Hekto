import { NavLink } from "react-router-dom";
import HektoLogo from "../assets/HektoLogo";
import SearchIcon from "../assets/SearchIcon";
import { useState } from "react";
import CustomInput from "./CustomInput";
import NavList from "./NavList";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className=" flex justify-between items-center px-10">
      <NavLink to="/" className=" inline-block py-5">
        <HektoLogo
          width="100px"
          height="28px"
          className="hover:scale-105 transition-all"
        ></HektoLogo>
      </NavLink>

      <NavList items={navItems} className="hidden md:flex" />

      <CustomInput Icon={SearchIcon}></CustomInput>

      <i
        className="bx bx-menu md:hidden block text-3xl cursor-pointer"
        onClick={() => setIsMenuOpen((currState) => !currState)}
      ></i>

      <div
        className={`absolute md:hidden top-[100px] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <NavList items={navItems} className="flex flex-col items-center" />
      </div>
    </nav>
  );
}
