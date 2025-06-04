/** @format */

import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { LuWallet } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

const Sidenav = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between p-2 w-40 bg-blue-200 h-screen">
        <ul className="flex flex-col gap-3">
          <li className="hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg">
            <a href="" className="flex items-center gap-4 hover:cursor-pointer">
              <TbLayoutDashboard />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="flex gap-4 items-center hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg"
            >
              <VscGraphLine />
              <span>Markets</span>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="flex gap-4 items-center hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg"
            >
              <LuWallet />
              <span>Porfolio</span>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="flex gap-4 items-center hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg"
            >
              <FaRegStar />
              <span>Watchlist</span>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="flex gap-4 items-center hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg"
            >
              <BiSolidBellRing />
              <span>Allerts</span>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="flex gap-4 items-center hover:bg-green-500 rounded hover:text-white hover:text-bold text-lg"
            >
              <LuSettings />
              <span>Settings</span>
            </a>
          </li>
        </ul>
        <button type="submit" className="flex items-center gap-2">
          <LuLogOut className="text-black text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
