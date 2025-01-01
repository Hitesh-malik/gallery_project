"use client";

import CircularCarousal from "@/app/utils/CircularCarousal";

const MeetSquads = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl mx-auto relative mt-40">
        <h2 className="my-10 text-5xl text-center">
          Meet Our Starclinch Squads
        </h2>
        <CircularCarousal />
      </div>
    </div>
  );
};

export default MeetSquads;
