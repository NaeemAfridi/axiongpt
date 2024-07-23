import Link from "next/link";

const CTA = () => {
  return (
    <section className=" py-12 text-white">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
            <span className="text-orange-500">Instant Room Makeovers </span>{" "}
            with a Click
          </h1>
          <p className="mb-6">Generate stunning room designs effortlessly.</p>
          <Link
            href="/dream"
            className="bg-orange-500 text-white px-8 py-3  hover:bg-orange-700 rounded-xl"
          >
            Try it Now
          </Link>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/ctaImage.png"
            alt="Room Design"
            className="w-full max-w-md"
            style={{ maxWidth: "800px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
