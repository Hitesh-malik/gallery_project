import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import GallerySection from "./components/gallerySection/GallerySection";
import MappingSection from "./components/mappingSection/MappingSection";
import MeetSquads from "./components/meetSquads/MeetSquads";
import RecentShows from "./components/recentShows/RecentShows";
import JoinSection from "./components/joinSection.jsx/JoinSection";

const page = () => {
  return (
    <div className="inter">
      <HeroSection />
      <GallerySection />
      <MappingSection />
      <MeetSquads />
      <RecentShows />
      <JoinSection />
    </div>
  );
};

export default page;
