
import Image from 'next/image'
import logo from '../assets/footer/logo.svg'
import fb from "../assets/footer/fb.svg";
import twitter from "../assets/footer/twitter.svg";
import instagram from "../assets/footer/instagram.svg";
import Link from 'next/link'

const Footer = () => {
return (
  <div className="w-12/12 footer py-16 md:py-24 px-4 md:px-8 flex flex-col lg:flex-row justify-around">
    <div className="mb-10 lg:mb-0">
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" />
        </a>
      </Link>
      <div className="text-white w-9/12">
        Our professional designers help you build elegant and lasting commercial
        buildings.
      </div>
    </div>
    {/* <div className="mx-5 mb-10 lg:mb-0">
      <ul>
        <li className="text-white font-black text-lg mb-8">About</li>
        <li className="mb-3">
          <Link href="/about">
            <a className="py-2">About us</a>
          </Link>
        </li>
      </ul>
    </div> */}
    {/* <div className="mx-5 mb-10 lg:mb-0">
      <ul>
        <li className="text-white font-black text-lg mb-8">Company</li>
        <li className="mb-3">
          <Link href="#q">
            <a className="py-2">Our team</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="#q">
            <a className="py-2">Partner With Us</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="#q">
            <a className="py-2">FAQ</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="#q">
            <a className="py-2">Blog</a>
          </Link>
        </li>
      </ul>
    </div> */}
    <div className="mx-5 mb-10 lg:mb-0">
      <ul>
        <li className="text-white font-black text-lg mb-8">Company</li>
        <li className="mb-3">
          <Link href="/about">
            <a className="py-2">About us</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/contact-us">
            <a className="py-2">Contact Us</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="mx-5 mb-10 lg:mb-0">
      <ul>
        <li className="text-white font-black text-lg mb-8">Get in Touch</li>
        <li className="mb-3">
          <Link href="#q">
            <a className="py-2">
              Question or feedback? <br /> We'd love to hear from you
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <div className="flex">
            <a
              href="https://www.facebook.com/Kaardesigns-101692122276242/"
              className="mr-2"
            >
              <Image src={fb} alt="fb" />
            </a>
            {/* <a href="#fb" className="mr-2">
              <Image src={twitter} alt="twitter" />
            </a> */}
            <a
              href="https://instagram.com/kaardesigns?utm_medium=copy_link"
              className="mr-2"
            >
              <Image src={instagram} alt="instagram" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
}
export default Footer

