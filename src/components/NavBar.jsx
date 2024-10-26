import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-2 px-9 bg-white border-b ">
      <img src="src/assets/logo.svg" alt="logo" className="w-18 h-auto mb-4" />
      <div className="hidden sm:flex space-x-4">
        <button className="flex items-center justify-center px-8 py-2 rounded-full border">
          Log in
        </button>
        <button className="flex items-center justify-center px-8 py-2 rounded-full border bg-gray-900 text-white  hover:bg-gray-700 transition-colors">
          Sign up
        </button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden focus:outline-none">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:hidden w-screen rounded-none mt-4 flex flex-col gap-6 py-10 px-6">
          <a
            href="/login"
            className="px-8 py-4 rounded-full text-center text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-8 py-4 bg-foreground text-center text-white rounded-full hover:bg-muted-foreground transition-colors"
          >
            Sign up
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default NavBar;
