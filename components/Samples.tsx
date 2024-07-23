// components/Samples.js

const images = [
  "/sample-1.png",
  "/sample-2.png",
  "/sample-3.png",
  "/sample-4.png",
  "/sample-5.png",
  "/sample-7.png",
];

const Samples = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="md:text-4xl text-3xl font-bold mb-8">
        Rooms that <span className="text-orange-600">AxionGPT</span> created
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative transition-transform duration-500
              transform hover:scale-110"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Samples;
