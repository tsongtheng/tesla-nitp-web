import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import ScrollStatus from "../scroll/ScrollStatus";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const visibility_list = ["hidden invisible", "visible block"];

  const [menu_dropdown_class, set_menu_dropdown_class] = useState(
    visibility_list[0]
  );

  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="fixed top-0 z-30 w-full">
      <div
        className={`w-[100%] fixed items-center justify-center ${
          colorChange &&
          " bg-black transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"
        }`}
        onBlur={() => {
          set_menu_dropdown_class(visibility_list[0]);
          setMenu(false);
        }}
      >
        <div className="flex items-center justify-between lg:w-[65rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
          <div className="flex items-center">
            <Link style={{ textDecoration: "none" }} to="/">
              <img
                height={42}
                width={100}
                src="/images/logo.svg"
                alt="logo"
                className="h-10"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="md:flex gap-8 hidden items-center text-base">
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/about">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      About
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/events">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      Events
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/news">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      News
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/projects">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      Projects
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink style={{ textDecoration: "none" }} to="/team">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      Team
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/gallery">
                  {({ isActive, isPending }) => (
                    <span
                      className={`hover:underline underline-offset-4 decoration-pink-500 ${
                        isActive ? "text-sky-500 font-medium" : "text-white"
                      }`}
                    >
                      Gallery
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>

            <button
              name="menu"
              type="button"
              onClick={() => {
                if (menu == false) {
                  setMenu(true);
                  set_menu_dropdown_class(visibility_list[1]);
                } else {
                  setMenu(false);
                  set_menu_dropdown_class(visibility_list[0]);
                }
              }}
              className={
                "animate-pulse border md:hidden focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
              }
              aria-label={menu ? "Close Menu" : "Open Menu"}
            >
              {!menu ? <HiMenuAlt3 /> : <FiX />}
            </button>
          </div>
        </div>
        <div
          className={
            menu_dropdown_class +
            " md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border"
          }
          tabindex="0"
        >
          <ul>
            <li>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <button
                  onClick={() => {
                    setMenu(false);
                    // setFocus(0);
                  }}
                  className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Home
                </button>
              </NavLink>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                <button
                  onClick={() => {
                    setMenu(false);
                    // setFocus(0);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/events">
                <button
                  onClick={() => {
                    setMenu(false);
                    // setFocus(0);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Events
                </button>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/gallery">
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Gallery
                </button>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/team">
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Team
                </button>
              </Link>
            </li>
            <li>
              <Link
                className="visited:text-white text-white"
                style={{ textDecoration: "none" }}
                to="/news"
              >
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                >
                  Newsletter
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <ScrollStatus />
      </div>
    </div>
  );
};

export default NavBar;
