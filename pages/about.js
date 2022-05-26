import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import hero from "../assets/about/hero.png";
import line from "../assets/home/line.svg";
import customerservice from "../assets/home/customerservice.svg";
import warranty from "../assets/home/warranty.svg";
import consult from "../assets/home/consult.svg";
import ceo from "../assets/about/Ceo2.jpeg";
import main from "../assets/about/workers.jpg";
import Director from "../assets/about/Director.jpeg"; 
import pcworking from "../assets/about/pcworking.png";
import living from "../assets/home/living.png";
import quotes from "../assets/about/quotes.svg";
import eclipse from "../assets/home/eclipse.svg";
import Service from "../components/home/service";
import team from "../assets/about/team.png";
import teammobile from "../assets/about/team-mobile.png";
import Experience from "../components/home/experience";
import Subscribe from "../components/subscribe";
import { useRouter } from "next/router";


export default function About() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Head>
        <title>About - KAARDESIGNS</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="px-2">
        <Navbar />
        <div className="w-full relative hidden lg:flex justify-center mb-10 items-center " >
          <Image height={500} src={main} alt="main" className=" object-cover object-top w-full h-full "  />
          <p className=" text-5xl text-center absolute z-30 text-white  mt-1 font-bold " >About Us</p>
          <div className=" bg-black absolute inset-0 opacity-60" />
        </div>
        <div className="flex flex-col md:flex-row relative items-center">
          <div className="flex">
            <div className="w-7/12 hidden md:block ml-2">
              <Image src={line} alt="line" />
            </div>
            <div className="flex flex-col mt-12">
              <div className="bluu-next text-3xl md:text-4xl text-darkbrown">
                About Us
              </div>
              <div className="assistant text-base text-gray-500 md:font-bold w-11/12 md:w-10/12 mt-2">
                Kaar Designs was founded in 1987 with a commitment to making
                cities better places to live. We believe that architecture and
                design matter, and that through our work, we can make a positive
                difference in the world. We strive to create buildings that are
                not just things in themselves, but serve as catalysts for
                positive urban and social change.
              </div>
            </div>
          </div>

          <div className="md:ml-auto md:pr-24 md:relative about mt-8 md:mt-0">
            <div className="circle absolute md:z-20 right-2 md:right-10 -top-10"></div>
            <Image src={hero} alt="Hero image" />
            <div className="hidden md:block square absolute md:z-20 left-32 md:-left-12 -bottom-12"></div>
          </div>
        </div>
        <div className="py-24">
          <div className="flex">
            <div className="hidden md:block ml-2">
              <Image src={line} alt="line" />
            </div>
            <div className="w-3/4 lg:w-1/4 ml-4 bluu-next text-2xl md:text-4xl">
              What You Gain When You Use Our Services
            </div>
          </div>
          <div className="w-10/12 md:w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-around items-center py-12">
            <Service
              img={customerservice}
              title="Good Customer service"
              description="We are always ready and willing to help and assist you in creating your dream home"
            />
            <Service
              img={warranty}
              title="Warranty"
              description="Renowned commercial architect partner toy can trust for small, medium and large projects."
            />
            <Service
              img={consult}
              title="Free Consultation"
              description="we provide free consultation on any type of dream project you would want and also assist in achieving this."
            />
          </div>
          <div className="w-full bg-darkbrown py-12 flex flex-col md:flex-row justify-center items-center relative">
            <div className="hidden md:block absolute -top-20">
              <Image src={eclipse} alt="eclipse" />
            </div>
            <div className="hidden md:block absolute top-48 -left-40 z-20 -rotate-90">
              <Image src={eclipse} alt="eclipse" />
            </div>
            <div className="lg:w-10/12 mx-auto md:mx-0 w-auto order-2 md:order-1 mt-12 md:mt-0">
              <div className="hidden lg:ml-20 md:block">
                <Image src={team} alt="team" />
              </div>
              <div className="md:hidden">
                <Image src={teammobile} alt="team" />
              </div>
            </div>
            <div className="lg:w-11/12 mx-auto md:mx-0 w-auto flex flex-col ml-4 md:ml-20 pr-20 justify-center items-center order-1 md:order-2">
              <div className="bluu-next text-white text-2xl md:text-5xl w-5/5">
                THE TEAM
              </div>
              <div className="assistant text-base shaded_white mt-3 w-auto">
                The Team is committed to guiding and advicing our cutomers on
                the best practices, and as well deliver on the agreement, we
                have been in service for over 34 years, trust us to be your sure
                plug.
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16  mt-12 mb-8">
                <div className="flex flex-col justify-center text-center ">
                  <span className="text-2xl text-white font-bold">34</span>
                  <span className="text-base font-thin text-white">
                    Years <br /> Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl text-white text-center font-bold">53</span>
                  <span className="text-base font-thin text-center text-white">
                    Properties <br /> Built
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl text-white text-center font-bold">123</span>
                  <span className="text-base font-thin text-center text-white">
                    Customers <br /> Gained
                  </span>
                </div>
              </div>
              <button
                onClick={() => router.push("/contact-us")}
                className="w-6/12 md:w-4/12 lg:w-3/12 assistant text-base text-white border border-white py-4"
              >
                Contact us
              </button>
            </div>
            <div className="absolute rotate-90 -bottom-44 -right-7">
              <Image src={eclipse} alt="eclipse" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center py-10 items-center px-4 lg:px-14 " >
            <div className="w-full rounded-xl flex flex-col justify-center pb-14 py-6 px-6 shadow-2xl " >
              <div className="bluu-next text-black text-center lg:text-center text-2xl md:text-5xl w-5/5">
                About CEO
              </div>
              <div className="w-full flex flex-col items-center text-left justify-center mt-5" >  
                <p className="assistant text-base text-black mt-3 w-auto text-left lg:text-center lg:w-4/6 "><span className=" font-semibold" >Christian Allan:</span> Started off the leading career in San Diego, California. Christian Allan has been able to create a niche for himself and the company with multiple jobs completed both in and out of the country. He is a great leader and an exceptional architect</p>
                <div className=" lg:w-56 lg:h-56 rounded-lg ">
                  <Image src={ceo} alt="ceo" className=" rounded-lg object-cover" />
                </div>
                <div className=" ml-10" > 
                  {/* <p className="assistant text-xl text-black font-bold mt-3 w-auto" ></p> */}
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl flex mt-10 flex-col justify-center pb-14 px-6 py-6 shadow-2xl " >
              <div className="bluu-next text-black text-center text-2xl md:text-5xl w-5/5">
                About Associate Director
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-5" >  
                <p className="assistant text-base  text-left text-black mt-3 w-auto lg:text-center lg:w-4/6 "><span className=" font-semibold" >Jeffrey Cook:</span> Working closely with the CEO over the years, Jeffrey Cook has been a great asset to the company and an excellent leader as well. He is able to deliver the best and has a proven track record of completed jobs.</p>
                <div className=" lg:w-56 lg:h-56 rounded-lg ">
                  <Image src={Director} alt="ceo" className=" rounded-lg object-cover" />
                </div>
                <div className=" ml-10" > 
                  {/* <p className="assistant text-xl text-black font-bold mt-3 w-auto" ></p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-12/12 py-12 flex flex-col lg:flex-row justify-center">
            <div className="w-11/12 mx-auto md:mx-0 lg:w-6/12 flex flex-col pt-8">
              <div className="bluu-next text-darkbrown text-2xl md:text-5xl w-4/5">
                Our Process Experience In Three Phase
              </div>
              <div className="mt-8">
                <Experience
                  num="01"
                  title="Research"
                  description="we engage in descriptive and quantitative research in order to come up with the best solution for your design it needs."
                />
                <Experience
                  num="02"
                  title="Briefing & Processing"
                  description="this stage involves taking notes of your requirements and creating a suitable program to fit your project"
                />
                <Experience
                  num="03"
                  title="Finishing"
                  description="we bring your ideas to life and give you an expert view of how realistic your project will be"
                />
              </div>
            </div>
            <div className="w-11/12 mx-auto lg:mx-0 lg:w-4/12 mt-8 md:mt-0">
              <Image src={living} alt="living" />
            </div>
          </div>
          <div className="w-12/12 md:w-10/12 mx-auto py-12 flex flex-col lg:flex-row">
            <div className="w-10/12 mx-auto lg:w-6/12 md:mx-0 flex flex-col">
              <div className="ml-auto">
                <Image src={quotes} alt="quotes" />
              </div>
              <div className="bluu-next text-3xl md:text-5xl text-darkbrown">
                Our work only makes sense if we meet your standard and Taste.
              </div>
              <div className="mr-auto rotate-180">
                <Image src={quotes} alt="quotes" />
              </div>
            </div>
            <div className="md:ml-12 lg:w-6/12 mt-10 lg:mt-0">
              <Image src={pcworking} alt="pcworking" />
            </div>
          </div>
          <Subscribe />
        </div>
        <Footer />
      </main>
    </div>
  );
}
