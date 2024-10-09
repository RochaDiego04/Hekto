import { useState } from "react";

type ImageShowCaseProps = {
  images: Array<string>;
};

export default function ImageShowCase({ images }: ImageShowCaseProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="p-5">
      <div className="block md:flex gap-8">
        <div className="flex flex-col gap-4">
          {images.map((_, index) => (
            <img
              key={index}
              src={images[index]}
              alt="product image"
              className=" h-[100px] w-[100px] object-fill rounded-md"
              onMouseOver={() => {
                setCurrentImage(index);
              }}
              onClick={() => {
                setCurrentImage(index);
              }}
            />
          ))}
        </div>
        <div>
          <img
            src={images[currentImage]}
            alt="big product image"
            className=" h-[440px] object-cover rounded-lg productCard"
          />
        </div>
      </div>
    </div>
  );
}
