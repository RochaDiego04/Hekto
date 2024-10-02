import { NavLink } from "react-router-dom";
import HektoLogo from "../../assets/HektoLogo";
import Button from "../../components/Button/Button";

export default function NotFound() {
  return (
    <div className=" text-center p-10 mt-16 md:p-20 md:mt-40">
      <NavLink to="/">
        <HektoLogo
          width="100px"
          height="100px"
          className=" flex justify-center items-center mx-auto"
        ></HektoLogo>
      </NavLink>

      <h1 className=" inline-block max-w-4xl">
        <span className=" text-primary">Oops!</span> We couldn't found the page
        you're trying to reach
      </h1>
      <p className=" text-xl mt-8">
        The link you followed may be broken, or the page may have been removed.
      </p>
      <NavLink to="/">
        <Button mode="filled" className=" mt-8">
          Home
        </Button>
      </NavLink>
    </div>
  );
}
