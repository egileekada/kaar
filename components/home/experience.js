
import Image from 'next/image'
import dottedline from "../../assets/home/dottedline.svg";

const Experience = ({num, title, description}) => {
    return (
      <div className="flex mb-3">
        <div className="flex flex-col items-center">
          <div className="list_circle flex justify-center items-center">{num}</div>
          <Image src={dottedline} alt="dottedline" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="assistant text-lg text-darkbrown font-black">
            {title}
          </span>
          <span className="w-5/5 md:w-4/5 assistant light_brown_text">
            {description}
          </span>
        </div>
      </div>
    );
}

export default Experience