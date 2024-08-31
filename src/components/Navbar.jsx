import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constant";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualReality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link className="py-2 px-3 border rounded-md" to="/signin">
              Sign In
            </Link>
            <Link className="py-2 px-3 border rounded-md" to="/register">
              Create an account
            </Link>
          </div>
          <div className="lg:hidden mf:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li className="py-4" key={index}>
                  <Link to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
                <Link to='/signin' className="py-2 px-2 border rounded-md">Sign in</Link>
                <Link to='/signin' className="py-2 px-2 border rounded-md">Create an account</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
