// components/ImageRow.js
import Image from "next/image";

const images = [
  "/businessInsider.svg",
  "/businessOfHome.svg",
  "MSN.svg",
  "NBC.svg",
  "/yahooNews.svg",
];

const Brands = () => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-slate-50 p-4">
      {images.map((src, index) => (
        <div key={index} className="w-50 h-30 flex items-center justify-center">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
