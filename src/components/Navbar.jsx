/** @format */

import React from "react";
import { assets } from "../assets/assets";
import { FaBeer } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import Sidenav from "./Sidenav";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center py-5 border-1 border-gray-400">
        <div className="flex items-center gap-3">
          <img src={assets.logo1} alt="" className="w-13" />
          <p className="text-black text-2xl">BitFlow</p>
        </div>
        <div className="flex justify-end items-center gap-6">
          <button className="flex items-center  border-2 border-gray-400 text-white rounded-md px-3 py-2">
            <IoSearchOutline className="text-black text-xl" />
            <span className="w-full text-xs text-black">
              Search coins, markets...
            </span>
          </button>
          <span>
            <FiBell />
          </span>
          <div className="w-1/4">
            <img src={assets.avator} alt="av" className="rounded-full w-1/3" />
          </div>
        </div>
      </div>
      <Sidenav />
    </div>
  );
};
