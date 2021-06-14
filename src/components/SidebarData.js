import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdIcons.MdDashboard />,
    cName: "side-text",
  },
  {
    title: "Courses",
    path: "/course",
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    cName: "side-text",
  },
  {
    title: "Library",
    path: "/library",
    icon: <IoIcons.IoLibrarySharp />,
    cName: "side-text",
  },
  // {
  //   title: "Department",
  //   path: "/department",
  //   icon: <GiIcons.GiGraduateCap />,
  //   cName: "side-text",
  // },
  // {
  //   title: "Help",
  //   path: "/help",
  //   icon: <IoIcons.IoHelpCircleSharp />,
  //   cName: "side-text",
  // },
  {
    title: "SHOP",
    path: "/help",
    icon: <FiIcons.FiShoppingCart />,
    cName: "side-text",
  },
];
