import React from "react";

const JoinSection = () => {
  return (
    <div className="mt-40 relative min-h-screen py-10 overflow-hidden">
      <div className="absolute flex justify-between w-[120vw] top-0 -left-60">
        <div className="bg-gradient-to-tr from-[#AE3999FC] to-black w-[40rem] h-[40rem] rounded-full inset-0 blur-md top-1/2 -left-40" />
        <div className="bg-gradient-to-bl from-[#AE3999FC] to-black w-[40rem] h-[40rem] rounded-full inset-0 blur-md bottom-0 -right-0" />
      </div>
      <div className=" h-[550px] bg-gradient-to-tr overflow-hidden from-[#14131E5C] to-[#08081000] backdrop-blur-3xl max-w-screen-2xl mx-auto rounded-full flex flex-col justify-center gap-10 items-center">
        <div className=" relative">
          <h3 className="text-7xl font-light">21+ Talented Folks</h3>
          <div className="absolute -top-10 flex -left-36 -rotate-[14deg]">
            <p className="text-4xl text-[#FF71A7] nanum">We are the team of</p>
            <img src="/join_arrow.png" alt="arrow" className="h-10 mt-4 ml-1" />
          </div>
          <span className="absolute z-10 bg-gradient-to-tr from-[#FFFAFA85] via-[#FFFAFA00] to-[#FFFAFAA6] font-thin text-white backdrop-blur px-8 text-2xl -bottom-4 -left-20 -rotate-[20deg] rounded-full">
            Fun
          </span>
          <span className="absolute z-10 bg-gradient-to-br from-[#FFFAFA85] via-[#FFFAFA00] to-[#FFFAFAA6] font-thin text-white backdrop-blur px-8 text-2xl -top-3 -right-16 rotate-6 rounded-full">
            Inclusive
          </span>
        </div>
        <div className="max-w-xl text-xl font-light text-gray-200 flex flex-col items-center gap-10">
          <p className="">
            From dedication to fun to, creating an impact, we do it all here. We
            are growing and will be excited to hear from you !
          </p>
          <button className="rounded-full px-10 py-3 bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC] ">
            Join our team &#8594;
          </button>
        </div>
        <div className="absolute bottom-1 flex items-center">
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin rotate-[20deg] rounded-full">
            Focused
          </span>
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin -rotate-[20deg] rounded-full">
            Collaborative
          </span>
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin rotate-[20deg] rounded-full">
            United
          </span>
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin -rotate-[20deg] rounded-full">
            Vibrant
          </span>
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin rotate-[20deg] rounded-full">
            Dynamic
          </span>
          <span className="z-10 bg-[#101018] backdrop-blur px-6 text-lg border border-[#101018] font-thin -rotate-[20deg] rounded-full">
            Motivated
          </span>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
