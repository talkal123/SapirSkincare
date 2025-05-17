import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { BsXLg } from "react-icons/bs";

const Nav = () => {
  const location = useLocation();

  return (
    <div
      className="p-8 border-b-1 border-b-black flex flex-col items-center"
      style={{ backgroundColor: "rgba(237, 235, 228, 1)" }}
    >
      <div className="max-w-[1100px] flex gap-15 justify-between w-full">
        <div>
          <h2>
            SAPIR SKINCARE <br /> BEVERLY HILLS
          </h2>
        </div>

        <div className="flex md:hidden items-center">
          <AlertDialog>
            <AlertDialogTrigger>
              <GiHamburgerMenu className="w-5 h-5 cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent className="fixed h-full w-64 z-50 right-50">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <AlertDialogCancel>
                    <BsXLg className="w-5 h-5" />
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="mt-5 p-5">
                    <ul className="flex flex-col gap-5">
                      <Link to="/"><li><h2 className="text-xl">HOME</h2></li></Link>
                      <Link to="/about"><li><h2 className="text-xl">ABOUT</h2></li></Link>
                      <Link to="/service"><li><h2 className="text-xl">SERVICE</h2></li></Link>
                      <Link to="/blog"><li><h2 className="text-xl">BLOG</h2></li></Link>
                      <Link to="/contact"><li><h2 className="text-xl">CONTACT</h2></li></Link>
                    </ul>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="hidden md:flex gap-15">
          <Link to="/" className="cursor-pointer">
            <div className={`p-2 ${location.pathname === "/" ? "border-b-2 border-black" : ""}`}>
              <h2>HOME</h2>
            </div>
          </Link>
          <Link to="/about" className="cursor-pointer">
            <div className={`p-2 ${location.pathname === "/about" ? "border-b-2 border-black" : ""}`}>
              <h2>ABOUT</h2>
            </div>
          </Link>
          <Link to="/service" className="cursor-pointer">
            <div className={`p-2 ${location.pathname === "/service" ? "border-b-2 border-black" : ""}`}>
              <h2>SERVICE</h2>
            </div>
          </Link>
          <Link to="/blog" className="cursor-pointer">
            <div className={`p-2 ${location.pathname === "/blog" ? "border-b-2 border-black" : ""}`}>
              <h2>BLOG</h2>
            </div>
          </Link>
          <Link to="/contact" className="cursor-pointer">
            <div className={`p-2 ${location.pathname === "/contact" ? "border-b-2 border-black" : ""}`}>
              <h2>CONTACT</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
