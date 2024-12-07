'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  // Toggle the menu open or closed when clicking the hamburger button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicking outside of the hamburger and menu elements
  const handleClickOutside = (e) => {
    if (
      hamburgerRef.current &&
      navMenuRef.current &&
      !hamburgerRef.current.contains(e.target) &&
      !navMenuRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white fixed w-full z-50 shadow-lg">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">DESA BELAWA</span>
          <span className="font-bold sm:text-2xl">DESA BELAWA</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            id="nav-menu"
            ref={navMenuRef}
            className={`nav-menu ${
              isMenuOpen ? '' : 'hidden'
            } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent`}
          >
            <ul className="block lg:flex">
              <NavLink title={'Beranda'} link={'/'} />
              <NavLink title={'Kategori'} link={'/kategori'} />
              <NavLink title={'Kontak'} link={'/kontak'} />
              <NavLink title={'Tentang'} link={'/about'} />
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button
              ref={hamburgerRef}
              className={`hamburger ${
                isMenuOpen ? 'hamburger-active' : ''
              } block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden`}
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
