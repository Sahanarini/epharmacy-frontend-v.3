import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import Section from './Section';
import Section2 from './Section2';

const Homepage = () => {
  return (
    <div>
      <HomeCarousel images={homeCarouselData} />

      <div className="container mx-auto px-4 py-20">
        <div className="space-y-10">
          <HomeProductSection data={mens_kurta} section={"Health Food and Drinks"} />
          <HomeProductSection data={mensShoesPage1} section={"Vitamins and Protein supplements"} />
          {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
          {/* <HomeProductSection data={sareePage1} section={"Saree"} />
          <HomeProductSection data={dressPage1} section={"Dress"} />
          <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
          <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
          {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
        </div>
        <div className="container mx-auto my-10">
          <hr />
        </div>
        <br></br>

        <Section />

        <div className="container mx-auto my-10">
          <hr />
          
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Section2 />

        <div className="container mx-auto my-10">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
