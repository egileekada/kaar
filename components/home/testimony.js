
import Image from 'next/image'


import cardeclipse from "../../assets/home/cardeclipse.svg";
import quotes from "../../assets/home/quotes.svg";

const Testimony = ({title, description, author, position, profile}) => {
    return (
      <div className="bg-darkbrown w-12/12 md:w-7/12 lg:w-5/12 mb-24 md:mb-0 px-8 py-8 md:mx-4 text-white relative">
        <div className="absolute right-1 -top-24">
          <Image src={cardeclipse} alt="cardeclipse" />
        </div>
        <div className="absolute -left-12 -bottom-24">
          <Image src={cardeclipse} alt="cardeclipse" />
        </div>
        <div className="absolute right-10 top-16">
          <Image src={quotes} alt="cardeclipse" />
        </div>
        <div className="mt-16">
          <div className="bluu-next text-white text-lg">{title}</div>
          <div className="flex">
            <div className="straight_line mr-2"></div>
            <span className="assistant text-sm font-light">{description}</span>
          </div>
          <div className="flex flex-col mt-3">
            <span className="text-lg bluu-next">{author}</span>
            <span className="assistant text-base">{position}</span>
          </div>
          <div className="testimonial_card_image absolute right-4 -bottom-12">
            <Image src={profile} alt="profile" />
          </div>
        </div>
      </div>
    );
}

export default Testimony