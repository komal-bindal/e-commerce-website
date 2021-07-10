import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../images/logo4.JPG";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between max-w-screen items-center px-8 md:px-12 py-1 shadow-lg rounded-md">
        <img src={logo} className="h-18 w-40 md:w-60" />
        <svg
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("ismenuopen is " + isMenuOpen);
          }}
          className="h-10 w-10 md:hidden"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path>
          <path d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path>
          <path d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path>
          <circle fill="transparent" cx="50%" cy="50%" r="75%"></circle>
        </svg>
        <div className="flex items-end justify-between hidden md:block text-xl font-bold animate-pulse">
          <NavLink
            to="/"
            exact="/"
            activeClassName="text-red-700 font-bold underline"
            className="hover:text-red-800 hover:underline pr-8"
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            activeClassName="text-red-700 underline font-bold"
            className="hover:text-red-800 hover:underline pr-8"
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-700 underline font-bold"
            className="hover:text-red-800 hover:underline"
          >
            About Us
          </NavLink>
        </div>
      </div>
      <Transition.Root show={isMenuOpen} as={Fragment}>
        <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="transition-opacity duration-400"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black z-10"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition duration-400ms"
            enterFrom="opacity-0  scale-50"
            enterTo="opacity-100 scale-100"
            leave="transform duration-400 transition ease-in-out"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="absolute top-20 h-60 w-40 flex flex-col bg-white right-0 z-20 items-center justify-center">
              <NavLink
                to="/"
                exact="/"
                activeClassName="text-red-700 underline font-bold"
                className="text-2xl font-semibold hover:underline mt-6 py-2"
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                activeClassName="text-red-700 underline font-bold"
                className="text-2xl font-semibold hover:underline mt-6 py-2"
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-red-700 underline font-bold"
                className="text-2xl font-semibold hover:underline mt-6 py-2"
              >
                About us
              </NavLink>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
export default Nav;
