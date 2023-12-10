import React from "react";

const AboutUs = () => {
  const divStyle = {
    backgroundImage: 'url("https://i.ibb.co/x1wmmLn/4860404.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={divStyle} className="mb-24 w-full md:h-[70vh]">
      <div className="md:w-[1156px] mx-auto py-16 md:flex justify-between">
        <div className="md:w-1/2">
          <div className="bg-white w-[300px] mx-auto md:mx-0 px-8 py-3 mb-20">
            <h4 className="text-5xl text-gray-300 font-bold -ml-7 -mt-10">1</h4>
            <h3 className="text-xl font-semibold">Lorem, ipsum.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="bg-white w-[300px] mx-auto md:mx-0 px-8 py-3 mb-20 md:ml-20">
            <h4 className="text-5xl text-gray-300 font-bold -ml-7 -mt-10">2</h4>
            <h3 className="text-xl font-semibold">Lorem, ipsum.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="bg-white w-[300px] mx-auto md:mx-0 px-8 py-3 mb-20">
            <h4 className="text-5xl text-gray-300 font-bold -ml-7 -mt-10">3</h4>
            <h3 className="text-xl font-semibold">Lorem, ipsum.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-5 md:p-0">
          <h6 className="text-[#823AFF] flex items-center gap-x-5">
            {" "}
            <div className="w-[80px] h-[2px] bg-[#823AFF] uppercase "></div>
            About Us
          </h6>
          <h3 className="text-4xl mt-5">We are the best</h3>
          <h3 className="text-4xl text-[#823AFF] mb-8">in our area</h3>
          <p className="text-gray-500 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
            maiores recusandae minus voluptates error tenetur, repudiandae rerum
            odio eligendi debitis ut quidem corrupti repellendus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat nam, libero ut
            laudantium aut quaerat.
          </p>
          <div className="flex items-center gap-x-12 mb-10">
            <div>
              <h3 className="text-2xl font-semibold">1234</h3>
              <p className="text-gray-500">Lorem, ipsum.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">1234</h3>
              <p className="text-gray-500">Lorem, ipsum.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">1234</h3>
              <p className="text-gray-500">Lorem, ipsum.</p>
            </div>
          </div>
          <img src="https://i.ibb.co/mqWrWZ3/signature-1.png" className="w-20 h-12" alt="" />
          <h5 className="text-lg font-semibold">Mohammad Rafi</h5>
          <p className="text-gray-500">Founder and ceo</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
