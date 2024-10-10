import Button from "./Button/Button";

export default function UniqueBanner() {
  return (
    <section className="flex flex-col md:flex-row justify-around bg-bgLightGrey p-maxContainer md:px-24">
      {/* Left side */}
      <div className=" flex-shrink-0 flex justify-center">
        <img
          src="./src/assets/img/unique-banner/sofa.png"
          alt=""
          className="md:mx-auto"
        />
      </div>

      {/* Right side */}
      <div>
        <h3 className="my-4 md:my-12">
          Unique Features Of leatest & Trending Poducts
        </h3>

        <ul className="flex flex-col gap-4 mb-12">
          <li className="text-grey3">
            <span className="inline-block h-2 w-2 bg-primary rounded-full mr-2"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="text-grey3">
            <span className="inline-block h-2 w-2 bg-info rounded-full mr-2"></span>
            Reinforced with double wood dowels, glue, screw - nails corner
          </li>
          <li className="text-grey3">
            <span className="inline-block h-2 w-2 bg-success rounded-full mr-2"></span>
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <Button className="" mode="filled">
            Add To Cart
          </Button>
          <p>
            B&B Italian Sofa
            <br />
            <span> $32.00</span>
          </p>
        </div>
      </div>
    </section>
  );
}
