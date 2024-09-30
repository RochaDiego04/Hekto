import Button from "./Button/Button";
import SearchIcon from "../assets/SearchIcon";
import "./Button/Button.css";
import CartIcon from "../assets/CartIcon";

export default function TopBar() {
  return (
    <div className="bg-tertiary ">
      <Button>Shop Now</Button>
      <Button
        buttonType="anchor"
        mode="filled"
        onClick={() => console.log("hello")}
      >
        Shop Now
      </Button>
      <Button
        className="dark"
        buttonType="anchor"
        Icon={() => <SearchIcon fillColor="#fff" width="24px" height="24px" />}
      ></Button>
      <Button
        buttonType="anchor"
        Icon={() => <SearchIcon fillColor="#fff" width="24px" height="24px" />}
      ></Button>
      <Button
        buttonType="button"
        mode="filledDark"
        onClick={() => console.log("hello")}
      >
        Shop Now
      </Button>
      <Button
        buttonType="button"
        mode="smallGreen"
        onClick={() => console.log("hello")}
      >
        Shop Now
      </Button>
      <Button
        buttonType="button"
        mode="smallDarkGreen"
        onClick={() => console.log("hello")}
      >
        Shop Now
      </Button>
      <Button
        buttonType="button"
        mode="filled"
        disabled
        onClick={() => console.log("hello")}
      >
        Shop Now
      </Button>
      <Button
        buttonType="anchor"
        mode="cart"
        Icon={() => <CartIcon fillColor="#7e33e0" width="15px" height="15px" />}
      ></Button>
      <Button
        buttonType="anchor"
        mode="cart2 cart"
        Icon={() => <CartIcon fillColor="#7e33e0" width="15px" height="15px" />}
      ></Button>
      <Button
        buttonType="anchor"
        mode="cart3 cart"
        Icon={() => <CartIcon fillColor="#7e33e0" width="15px" height="15px" />}
      ></Button>
    </div>
  );
}
