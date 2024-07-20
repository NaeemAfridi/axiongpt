import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          roomGPTFYP
        </h1>
      </Link>
      <Link
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-purple-600 text-white px-5 py-2 text-sm shadow-md hover:bg-purple-500 bg-purple-600 font-medium transition"
        href="/login"
      >
        Login
      </Link>
    </header>
  );
}
