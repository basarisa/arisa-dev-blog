import { Menu } from "lucide-react";
function NavBar() {
  return (
    <nav className="flex items-center justify-between py-2 px-9 bg-white border-b ">
      <img src="src/assets/logo.svg" alt="logo" className="w-18 h-auto mb-4" />
      <div className="hidden md:flex space-x-4">
        <button className="flex items-center justify-center px-9 py-2 rounded-full border">
          Log in
        </button>
        <button className="flex items-center justify-center px-8 py-2 rounded-full border bg-gray-900 text-white  hover:bg-gray-700 transition-colors">
          Sign up
        </button>
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
}

export default NavBar;
