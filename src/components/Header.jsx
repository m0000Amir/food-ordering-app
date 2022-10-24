import React from "react";
import foody from "../assets/images/foody.png"
import cartIcon from "../assets/icons/cart.svg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2 text-white">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-whtie no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={foody} alt="logo" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="#about" className="text-xl">
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to="/login">
            Log In
          </Link>
          <Link to="/register">
            Sign Up
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Header;
