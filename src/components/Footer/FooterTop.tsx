import { NavLink } from "react-router-dom";
import HektoLogo from "../../assets/HektoLogo";
import CustomInput from "../CustomInput";

export default function FooterTop() {
  return (
    <div className=" max-w-maxContainer mx-auto grid grid-cols-2 md:grid-cols-4 p-maxContainer gap-12">
      <div className="col-start-1 col-end-3 md:col-start-auto md:col-end-auto">
        <NavLink to="/" className=" inline-block py-5">
          <HektoLogo
            width="100px"
            height="28px"
            className="hover:scale-105 transition-all"
          ></HektoLogo>
        </NavLink>

        <CustomInput
          className="inline-block mb-6"
          buttonText="Sign Up"
          buttonMode="light"
          placeholder="Enter Email Address"
        ></CustomInput>

        <p className="text-[14px] text-grey3">
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>
      <div>
        <h5 className="subtitle2 mb-6">Categories</h5>
        <ul className="flex flex-col gap-6 text-grey3">
          <li>
            <a href="#">Laptops & Computers</a>
          </li>
          <li>
            <a href="#">Cameras & Photography</a>
          </li>
          <li>
            <a href="#">Smart Phones & Tablets</a>
          </li>
          <li>
            <a href="#">Video Games & Consoles</a>
          </li>
          <li>
            <a href="#">Waterproof Headphones</a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="subtitle2 mb-6">Customer Care</h5>
        <ul className="flex flex-col gap-6 text-grey3">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Discount</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Orders History</a>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="subtitle2 mb-6">Pages</h5>
        <ul className="flex flex-col gap-6 text-grey3">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Browse the Shop</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Pre-Built Pages</a>
          </li>
          <li>
            <a href="#">Visual Composer Elements</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
