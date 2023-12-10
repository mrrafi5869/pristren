import { IoStar } from "react-icons/io5";
import { BsFillTriangleFill } from "react-icons/bs";

const MeetThePoint = () => {
  return (
    <div className="w-[1176px] mx-auto flex justify-center items-center gap-x-32">
      <div className="w-[500px]">
        <h4 className="text-[#6B63FF] font-semibold mb-3">MEET THE POINT</h4>
        <h2 className="flex items-center gap-3 text-4xl mb-10 font-bold">
          Align{" "}
          <BsFillTriangleFill className="text-[#6B63FF]"></BsFillTriangleFill>{" "}
          Whole Team
        </h2>
        <p className="mb-10 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          debitis minus labore nobis accusantium vero reprehenderit nesciunt
          placeat rerum vitae! Saepe, magni maiores! Quaerat odit beatae
          officiis eum ipsum ab ipsam pariatur deserunt quibusdam rerum facere
          tempora id reiciendis libero repellat sequi magnam perferendis animi
          voluptas, fugit inventore blanditiis distinctio. Corrupti odit
          accusantium iure dicta.
        </p>
        <button className="px-5 py-3 bg-[#3E66F8] block mt-5 text-white rounded-lg">
          Get Started
        </button>
      </div>
      <div className="h-[600px] w-[555px] rounded-3xl bg-[#EEF9FF] relative">
        <div className=" bg-white w-[350px] p-8 rounded-lg absolute bottom-16 right-16 z-10">
          <div className="flex gap-x-3 mt-10 mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
              className="w-12 h-12"
              alt=""
            />
            <div>
              <h5 className="text-lg font-semibold">Nichole Erickson</h5>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur .
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
              className="w-12 h-12"
              alt=""
            />
            <div>
              <h5 className="text-lg font-semibold">Nichole Erickson</h5>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur .
              </p>
            </div>
          </div>
          <button className="bg-[#DDF4FF] text-[#366EF8] px-8 py-4 font-semibold rounded-lg">
            Task Created by nichole evans
          </button>
        </div>
        <div className="bg-white w-[300px] p-5 absolute shadow-xl top-24 -left-16 z-20">
          <div className="flex items-center gap-x-5 mb-5">
            <span className="w-8 h-8 bg-[#DDF4FF] rounded-full"></span>
            <span className="bg-[#DDF4FF] w-[200px] h-3 rounded-full"></span>
          </div>
          <div className="flex items-center gap-x-5 mb-5">
            <span className="w-8 h-8 bg-blue-600 rounded-full"></span>
            <span className="bg-blue-600 w-[200px] h-3 rounded-full"></span>
          </div>
          <div className="flex items-center gap-x-5 mb-5">
            <span className="w-8 h-8 bg-[#DDF4FF] rounded-full"></span>
            <span className="bg-[#DDF4FF] w-[200px] h-3 rounded-full"></span>
          </div>
        </div>
        <div className="bg-[#A7B6F9] w-40 h-40 blur-xl rounded-full absolute bottom-2 left-10 z-0"></div>
        <IoStar className="absolute text-8xl text-yellow-300 right-44 top-8"></IoStar>
      </div>
    </div>
  );
};

export default MeetThePoint;
