import FacebookIcon from "../../assets/iconsSocials/FacebookIcon";
import InstagramIcon from "../../assets/iconsSocials/InstagramIcon";
import TwitterIcon from "../../assets/iconsSocials/TwitterIcon";
import Button from "../Button/Button";

export default function FooterBottom() {
  return (
    <div className=" bg-grey2 py-5 px-maxContainer flex justify-between items-center">
      <p className=" text-sm text-grey3">©Webecy - All Rights Reserved</p>
      <div>
        <Button
          buttonType="anchor"
          className="items-center text-white"
          href="#"
          Icon={() => (
            <FacebookIcon fillColor="#101750" width="24px" height="24px" />
          )}
        ></Button>
        <Button
          buttonType="anchor"
          className="items-center text-white"
          href="#"
          Icon={() => (
            <TwitterIcon fillColor="#101750" width="24px" height="24px" />
          )}
        ></Button>
        <Button
          buttonType="anchor"
          className="items-center text-white"
          href="#"
          Icon={() => (
            <InstagramIcon fillColor="#101750" width="24px" height="24px" />
          )}
        ></Button>
      </div>
    </div>
  );
}
