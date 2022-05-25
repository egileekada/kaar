import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.png'
import logosvg from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import menudark from "../assets/menudark.svg";

const Navbar = () => {
  const { asPath } = useRouter();

  const [isopen, setisopen] = useState(false)

    return (
      <div className="flex flex-col md:flex-row md:items-center pt-6 pb-8 md:pl-12">
        <div className="w-12/12 px-4 pb-4 md:pb-0 md:px-0 md:w-5/12 flex justify-between items-center">
          <div className="logo_container">
            <Link href="/"><a><Image src={asPath === "/contact-us" ? logosvg : logo} alt="Logo" /></a></Link>
          </div>
          <button className="md:hidden" onClick={() => setisopen(!isopen)}>
            <Image
              src={asPath === "/contact-us" ? menudark : menu}
              alt="menu"
            />
          </button>
        </div>
        <ul
          className={`${
            isopen ? "absolute z-20 top-20 left-0 bg-white w-full h-52" : "hidden"
          } pl-4 md:pl-0 pt-8 md:pt-0 md:flex flex-col md:flex-row w-7/12 items-center navbar`}
        >
          <li className="mr-12 p-2">
            <Link href="/">
              <a
                className={`${
                  asPath !== "/contact-us" ? "text-darkbrown" : "text-darkbrown md:text-white"
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="mr-12 p-2">
            <Link href="/about">
              <a
                className={`${
                  asPath !== "/contact-us" ? "text-darkbrown" : "text-darkbrown md:text-white"
                }`}
              >
                About us
              </a>
            </Link>
          </li>
          <li className="mr-12 p-2">
            <Link href="/contact-us">
              <a
                className={`${
                  asPath !== "/contact-us" ? "text-darkbrown" : "text-darkbrown md:text-white"
                }`}
              >
                Contact us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Navbar