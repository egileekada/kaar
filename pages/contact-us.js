import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import arrow from "../assets/contact/arrow.svg";
import Subscribe from "../components/subscribe";


export default function Contact() {
  
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    setloading(true);
    const formContent = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: formContent,
    };

    try {
      const res = await fetch("/api/contact-mail", options);
      const response = await res.json();
      reset({ name: "", email: "", description: "" });
      if (response.status === 200) {
        message.success(response.message, 5);
        setloading(false);
      } else {
        message.error(response.message, 5);
        setloading(false);
      }
    } catch (error) {
      message.error('An error occured, please try again shortly', 5);
      setloading(false);
    }
  };

  const loadingSpinner = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact - KAARDESIGNS</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="px-2 bg-darkbrown">
        <Navbar />

        <div className="flex flex-col lg:flex-row justify-between pb-24">
          <div className="w-12/12 lg:w-6/12 relative">
            <div className="flex">
              <div className="hidden md:block">
                <Image src={arrow} alt="arrow" />
              </div>
              <div className="flex flex-col ml-5">
                <span className="assistant text-white text-base">
                  Let us know how we can be of help
                </span>
                <span className="bluu-next text-white text-5xl">
                  Contact US
                </span>
              </div>
            </div>
            <div className="hidden lg:block contact_line1 absolute left-48 -top-8"></div>
            <div className="relative md:left-40 lg:left-56 mt-12">
              <div className="text-base text-white w-11/12 mx-auto md:mx-0 md:w-7/12">
                Send us a message so we get to talk about your amazing idea and
                as well give support
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-11/12 mx-auto md:w-7/12 md:mx-0 mt-12"
              >
                <div className="mb-8">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full bg-darkbrown contact_form h-12 pl-2"
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="Your email address"
                    className="w-full bg-darkbrown contact_form h-12 pl-2"
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="text"
                    {...register("description")}
                    placeholder="Tell us about it"
                    className="w-full bg-darkbrown contact_form h-12 pl-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-center text-white contact_form_btn py-3"
                >
                  {loading ? <Spin indicator={loadingSpinner} /> : "Send"}
                </button>
              </form>
            </div>

            <div className="hidden lg:block contact_line1 absolute right-0 -top-8"></div>
          </div>
          <div className="w-11/12 mx-auto lg:mx-0 lg:w-5/12 relative">
            <div className="hidden lg:block contact_line1 absolute ledft-16 -top-8"></div>
            <div className="hidden lg:block contact_rectangle absolute right-4 -top-2"></div>
            <div className="mt-12 md:mt-24">
              <div className="flex flex-col md:ml-16">
                <span className="assistant text-xl font-bold text-white mb-6">
                  Opening Hours
                </span>
                <ul>
                  <li className="text-white text-base mb-3">Weekdays</li>
                  <li className="text-white text-base mb-3">8am - 5pm</li>
                  <li className="text-white text-base mb-3">
                    Closed during weekends
                  </li>
                </ul>
              </div>
              <div className="flex flex-col md:ml-16 mt-10">
                <span className="assistant text-xl font-bold text-white mb-6">
                  Support
                </span>
                <ul>
                  <li className="text-white text-base mb-3">
                    (619) 353 - 5598
                  </li>
                  <li className="text-white text-base mb-3">
                    support@kaardesigns.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block contact_rectangle2 absolute mt-12 left-4"></div>
          </div>
        </div>

        <Subscribe />

        <Footer />
      </main>
    </div>
  );
}
