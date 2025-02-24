import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-3 px-5 fixed w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Miguel Ángel Álvarez / A01722925</h1>

        <div className="space-x-6">
          <Link href="/page2" className="hover:text-blue-400">
            Contador
          </Link>
          <Link href="/page3" className="hover:text-blue-400">
            Rectangulos
          </Link>
        </div>
      </div>
    </nav>
  );
}
