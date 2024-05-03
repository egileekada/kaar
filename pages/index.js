import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import hero from "../assets/home/three.jpeg";
import line from "../assets/home/line.svg";
import customerservice from "../assets/home/customerservice.svg";
import warranty from "../assets/home/warranty.svg";
import consult from "../assets/home/consult.svg";
import kitchen from "../assets/home/kitchen.png";
import living from "../assets/home/living.png";
import eclipse from "../assets/home/eclipse.svg";
import backarrow from "../assets/home/backarrow.svg";
import frontarrow from "../assets/home/frontarrow.svg";
import leftborder from "../assets/home/leftborder.svg";
import profile1 from "../assets/home/profile1.png";
import profile2 from "../assets/home/profile2.png";
import Service from "../components/home/service";
import Experience from "../components/home/experience";
import Testimony from "../components/home/testimony";
import Subscribe from "../components/subscribe";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen">
      <Head>
        <title>KAARDESIGNS</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">
        <Navbar />
        <div className="w-11/12 mx-auto lg:w-12/12 flex flex-col md:flex-row relative items-center">
          <div className="darkbrown_container mx-auto md:mx-0 bg-darkbrown md:z-20 md:absolute md:left-0 px-8 pt-8 md:p-12">
            <div className="bluu-next text-2xl lg:text-5xl text-white mb-6">
              We Help You Build Modern Commercial Buildings
            </div>
            <div className="assistant shaded_white mb-6 w-11/12">
              Our professional designers help you build elegant and lasting
              commercial buildings.
            </div>
            <button
              onClick={() => router.push("/contact-us")}
              className="text-darkbrown bg-white w-48 h-14 font-bold"
            >
              Contact Us
            </button>
          </div>
          <div className="md:ml-auto md:pr-24 md:relative">
            <div className="circle absolute md:z-20 -right-1 md:right-10 -top-10"></div>
            <Image src={hero} alt="Hero image" />
            <div className="square absolute md:z-20 left-32 md:-left-12 -bottom-12"></div>
          </div>
        </div>
        <div className="py-24">
          <div className="flex">
            <div className="hidden md:block">
              <Image src={line} alt="line" />
            </div>
            <div className="w-3/4 md:w-2/4 lg:w-1/4 ml-4 bluu-next text-2xl md:text-4xl">
              What You Gain When You Use Our Services
            </div>
          </div>
          <div className="w-10/12 md:w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-around items-center py-12">
            <Service
              img={customerservice}
              title="Good Customer service"
              description="We offer good customer service, you have us at every moment of your journey with us."
            />
            <Service
              img={warranty}
              title="Warranty"
              description="You‘re covered with our warranty package, we offer reliable services. trust us to deliver."
            />
            <Service
              img={consult}
              title="Free Consultation"
              description="We consult for you while dealing with us, we will always be there to advice and guide you."
            />
          </div>
          <div className="w-full bg-darkbrown py-12 flex flex-col md:flex-row justify-center relative">
            <div className="hidden md:block absolute -top-20">
              <Image src={eclipse} alt="eclipse" />
            </div>
            <div className="hidden md:block absolute top-48 -left-40 z-20 -rotate-90">
              <Image src={eclipse} alt="eclipse" />
            </div>
            <div className="w-10/12 mx-auto md:mx-0 md:w-4/12 order-2 md:order-1 mt-12 md:mt-0">
              <Image src={kitchen} alt="kitchen" />
            </div>
            <div className="w-11/12 mx-auto md:mx-0 md:w-6/12 flex flex-col ml-4 md:ml-8 justify-center order-1 md:order-2">
              <div className="bluu-next text-white text-2xl lg:text-5xl w-5/5">
                We provide You With A Quality Housing Design
              </div>
              <div className="assistant text-base shaded_white mt-3 w-5/5">
                The Team is committed to guiding and advicing our cutomers on
                the best practices, and as well deliver on the agreement, we
                have been in service for over 34 years, trust us to be your sure
                plug.
              </div>
              <div className="flex mt-12 mb-8">
                <div className="flex flex-col mr-12">
                  <span className="text-2xl text-white font-bold">34</span>
                  <span className="text-base font-thin text-white">
                    Years <br /> Experience
                  </span>
                </div>
                <div className="flex flex-col mr-12">
                  <span className="text-2xl text-white font-bold">53</span>
                  <span className="text-base font-thin text-white">
                    Properties <br /> Built
                  </span>
                </div>
                <div className="flex flex-col mr-4">
                  <span className="text-2xl text-white font-bold">123</span>
                  <span className="text-base font-thin text-white">
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
          <div className="w-12/12 py-12 flex flex-col lg:flex-row justify-center">
            <div className="w-11/12 mx-auto lg:mx-0 lg:w-6/12 flex flex-col pt-8">
              <div className="bluu-next text-darkbrown text-2xl md:text-5xl w-4/5">
                Our Process Experience In Three Phase
              </div>
              <div className="mt-8">
                <Experience
                  num="01"
                  title="Research"
                  description="We don’t commence any project without  a proper research, this help us to know what do and how best to deliver"
                />
                <Experience
                  num="02"
                  title="Briefing & Processing"
                  description="After our research we prepare a document brief to explain our process to the client and begin the actual process."
                />
                <Experience
                  num="03"
                  title="Finishing"
                  description="After the wireframe is complete we run the finifhing based on the client taste and ensure the client is satistfied. all being delivered on the stipulated time."
                />
              </div>
            </div>
            <div className="w-11/12 md:w-10/12 mx-auto lg:mx-0 lg:w-4/12 mt-8 md:mt-0">
              <Image src={living} alt="living" />
            </div>
          </div>
          <div className="w-11/12 mx-auto py-12 flex">
            <div className="hidden md:block mr-12 relative top-32">
              <Image src={leftborder} alt="leftborder" />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="bluu-next text-darkbrown text-2xl md:text-5xl w-5/5 md:w-3/5">
                  Hear Directly From Our Amazing Customers
                </div>
                <div className="hidden md:flex items-center">
                  <button className="mr-2">
                    <Image src={backarrow} alt="backarrow" />
                  </button>
                  <button className="">
                    <Image src={frontarrow} alt="backarrow" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around pt-12">
                <Testimony
                  title="Quality Organizations"
                  description="Kaar Designs has been a quality organization to partner with as a subcontractor.  The team are well organized and clear on the expectations needed to meet their customers needs.  All communications are timely and very professional...look no further you want to work with this team!"
                  author="Adam Coan"
                  position="..."
                  profile={profile1}
                />
                <Testimony
                  title="Great overall Experience"
                  description="Had a great overall experience with Christian and his team. They were very professional and knowledgeable of the codes.Their plans for my remodel were very accurate and permitting was a breeze."
                  author="Catherine Wusylko"
                  position="..."
                  profile={profile2}
                />
              </div>
            </div>
          </div>
          <Subscribe />
        </div>
        <Footer />
      </main>
    </div>
  );
}
