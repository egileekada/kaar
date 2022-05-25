import Image from 'next/image'

const Service = ({ img, title, description }) => {
  return (
    <div className="flex items-start mx-1 relative mb-12 md:mb-0">
      <div className="w-2/5">
        <Image src={img} alt="customerservice" />
      </div>
      <div className="flex flex-col ml-2 md:ml-1">
        <span className="assistant font-bold text-lg">{title}</span>
        <span className="assistant w-6/6 mt-2">{description}</span>
      </div>
    </div>
  );
};


export default Service;
