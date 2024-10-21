import { IoLogoGithub } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#EFEEEB] p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full ">
      <div className="flex flex-row items-center space-y-0 space-x-4">
        <span className="font-medium mr-4">Get in touch</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-muted-foreground">
            <Linkedin size={24} className="text-black" />
          </a>
          <a href="#" className="hover:text-muted-foreground">
            <IoLogoGithub size={24} className="text-black" />
          </a>
          <a href="#" className="hover:text-muted-foreground">
            <AiFillGoogleCircle size={24} className="text-black" />
          </a>
        </div>
      </div>
      <a
        href="/"
        className="hover:text-muted-foreground font-medium underline text-black"
      >
        Home page
      </a>
    </footer>
  );
}

export default Footer;
