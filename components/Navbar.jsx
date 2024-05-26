import Link from "next/link";

function Navbar() {
  return (
    <nav className=" bg-teal-600 mb-8 flex justify-between items-center px-4 p-3">
      <Link href="/" className="text-neutral-950">
        Home
      </Link>
      <ul>
        <li>
          <Link href="/" className="text-neutral-950">
            Users
          </Link>
        </li>

        <li>
          <Link href="/about" className="text-neutral-950">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
