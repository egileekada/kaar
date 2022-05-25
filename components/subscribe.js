import { useRef } from "react";

const Subscribe = () => {
  const subscriberEmail = useRef("");

  const subscribeForMails = () => {
    // alert(subscriberEmail.current.value);

    subscriberEmail.current.value = "";
  };

  return (
    <div className="bg-white pt-12 flex flex-col items-center relative">
      <div className="bluu-next text-darkbrown text-2xl md:text-5xl w-4/6 lg:w-3/6 md:text-center">
        Join Our Team and Get Latest News About Us
      </div>
      <div className="assistant text-darkbrown text-base w-5/6 lg:w-2/6 py-3 text-center mb-16">
        We highly recommend you subscribe to our newsletter so you are not left
        our in the update that concern us.
      </div>
      <div className="w-12/12 md:w-7/12 lg:w-4/12 bg-white flex items-center p-2 absolute -bottom-4">
        <div className="pr-2 w-8/12">
          <input
            type="email"
            ref={subscriberEmail}
            className="w-full py-2 px-1 subscribe_input"
            placeholder="Enter your email address"
          />
        </div>
        <button
          className="w-4/12 bg-darkbrown text-white px-6 md:px-8 py-3"
          onClick={subscribeForMails}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
