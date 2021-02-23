import React from "react";
import Link from "next/link";
import { FaAngleDoubleRight, FaRegEye } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link href="/">
            <a className="nav-link">
              <span className="link-text logo-text">Fireship</span>
              <FaAngleDoubleRight />
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/auction/create">
            <a className="nav-link">
              <span className="link-text">Create</span>
              <IoMdCreate />
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/auction/join/id">
            <a className="nav-link">
              <span className="link-text">Join</span>
              <FiPlusCircle />
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/auction/view/id">
            <a className="nav-link">
              <span className="link-text">View All</span>
              <FaRegEye />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
