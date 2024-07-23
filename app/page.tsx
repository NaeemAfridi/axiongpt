import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Samples from "../components/Samples";
import CTA from "../components/CTA";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display md:text-5xl text-4xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Creating Personalized Interior Spaces
          <span className="relative whitespace-nowrap text-orange-600">
            <SquigglyLines />
            <span className="relative">with AI </span>
          </span>
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Our AI platform makes professional-quality interior design accessible
          to everyone, providing tools to transform dream rooms into reality.
        </h2>
        <Link
          className="bg-orange-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 transition"
          href="/dream"
        >
          Visualize My Dream Room
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with AxionGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with AxionGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <Brands />
        <Testimonials />
        <Samples />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
