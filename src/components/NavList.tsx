import { NavLink } from "react-router-dom";

type NavListProps = {
  items: { name: string; path: string }[];
  className?: string;
};

const NavList = ({ items, className = "" }: NavListProps) => {
  return (
    <ul className={`flex items-center gap-12 text-base ${className}`}>
      {items.map((item) => (
        <li key={item.name} className="p-3 hover:text-primary">
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
