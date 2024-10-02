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
      <ul className="flex gap-12">
        <li>
          <Button
            buttonType="anchor"
            className="items-center text-white"
            href="#"
            Icon={() => (
              <EnvelopIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            mhhasanul@gmail.com
          </Button>
        </li>
        <li>
          <Button
            buttonType="anchor"
            className="items-center text-white"
            href="#"
            Icon={() => (
              <PhoneIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            (12345)67890
          </Button>
        </li>
      </ul>

      <ul className="flex items-center">
        <li>
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
        <li>
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
        <li>
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <UserIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            Login
          </Button>
        </li>
        <li>
          <Button
            buttonType="anchor"
            className="items-center text-white flex-row-reverse"
            href="#"
            Icon={() => (
              <HeartIcon fillColor="#fff" width="15px" height="15px" />
            )}
          >
            Wishlist
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
