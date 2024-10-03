import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

type NavListProps = {
  items: { name: string; path: string }[];
  className?: string;
  onCloseMenu: Dispatch<SetStateAction<boolean>>;
};

const NavList = ({ items, className = "", onCloseMenu }: NavListProps) => {
  return (
    <ul className={`flex items-center gap-12 text-base ${className}`}>
      {items.map((item) => (
        <li key={item.name} className=" hover:text-primary">
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            onClick={() => onCloseMenu(false)}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
