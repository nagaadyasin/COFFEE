import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black/40 backdrop-blur-lg fixed w-full z-50 text-white">
      <h2 className="text-xl font-bold text-orange-400">☕ Coffee</h2>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-orange-400">
            About
          </Link>
        </li>

        <li>
          <Link to="/menu" className="hover:text-orange-400">
            Menu
          </Link>
        </li>

        <li>
          <Link to="/testimonials" className="hover:text-orange-400">
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="/gallery" className="hover:text-orange-400">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}
