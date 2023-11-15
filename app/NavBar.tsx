import Link from "next/link";
import { FaBug } from "react-icons/fa";

async function NavBar() {
   
  return (
    <nav className="flex space-x-6 border-b mb-2 px-5 h-14 items-center">
      <Link href="/"><FaBug /></Link>
      <ul className="flex space-x-6">
        <li> <Link href="/" className=" text-zinc-500 hover:text-zinc-800 transition-colors">Dashboard</Link></li>
        <li> <Link href="/issues">Issues</Link></li>
      </ul>
    </nav>
  );
}


export default NavBar;
