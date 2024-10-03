import ArrowIcon from "../assets/ArrowIcon";
import CartIcon from "../assets/CartIcon";
import EnvelopIcon from "../assets/EnvelopIcon";
import HeartIcon from "../assets/HeartIcon";
import PhoneIcon from "../assets/PhoneIcon";
import UserIcon from "../assets/UserIcon";
import Button from "./Button/Button";
import "./Button/Button.css";

export default function TopBar() {
  return (
    <div className="bg-tertiary flex justify-evenly">
      <ul className="flex gap-3 md:gap-12">
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white"
            href="#"
            Icon={() => (
              <EnvelopIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            <p className=" hidden md:block">mhhasanul@gmail.com</p>
          </Button>
        </li>
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white"
            href="#"
            Icon={() => (
              <PhoneIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            <p className=" hidden md:block">(12345)67890</p>
          </Button>
        </li>
      </ul>

      <ul className="flex items-center text-[13px] md:text-[16px]">
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <ArrowIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            English
          </Button>
        </li>
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <ArrowIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            USD
          </Button>
        </li>
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <UserIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            <p className=" hidden md:block">Login</p>
          </Button>
        </li>
        <li className="flex items-center justify-center">
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <HeartIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            <p className=" hidden md:block">Wishlist</p>
          </Button>
        </li>
        <li>
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <CartIcon fillColor="#fff" width="15px" height="15px" />
            )}
          ></Button>
        </li>
      </ul>
    </div>
  );
}
