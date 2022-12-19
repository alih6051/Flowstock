import React from "react";
import Banner from "../Components/HomePage/Banner";
import BrandList from "../Components/HomePage/BrandList";
import CategoryList from "../Components/HomePage/CategoryList";
import MainCarousel from "../Components/HomePage/MainCarousel";
import TrendingSearchList from "../Components/HomePage/TrendingSearchList";
import { Show, Hide } from "@chakra-ui/react";

const Home = () => {
  const brand_data = [
    "https://ak1.ostkcdn.com/img/mxc/111522-NinjaLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-SharkLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-KitchenAidLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-DysonLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-KeurigLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-CuisinartLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/111522-CalphalonLogo.svg?imwidth=3840",
    "https://ak1.ostkcdn.com/img/mxc/111522-HamiltonBeachLogo.svg?imwidth=3840",
    "https://ak1.ostkcdn.com/img/mxc/111522-CasperLogo.svg?imwidth=1920",
  ];

  const category_data = [
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
      title: "Furniture",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
      title: "Area Rugs",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
      title: "Bedding",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
      title: "Home Decor",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
      title: "Window Treatments",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
      title: "Kitchen",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152022-CatSilo-Outdoor.png?imwidth=1920",
      title: "Outdoor",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
      title: "Home Improvements",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
      title: "Storage",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
      title: "Mattresses",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
      title: "Lighting",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
      title: "Shop All Deals",
    },
  ];

  const carousel_data = [
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920",
      title: "home gifts",
      des: "Gift-ready home goods for everyone on your list.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame2.jpg?imwidth=3840",
      title: "kitchen appliances",
      des: "Small but mighty tools that make food prep a breeze.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame3.jpg?imwidth=3840",
      title: "christmas trees",
      des: "The perfect place to put those perfect gifts.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=3840",
      title: "holiday decor",
      des: "Deck your halls with the season’s festive finest.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920",
      title: "home gifts",
      des: "Gift-ready home goods for everyone on your list.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=3840",
      title: "holiday decor",
      des: "Deck your halls with the season’s festive finest.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920",
      title: "home gifts",
      des: "Gift-ready home goods for everyone on your list.",
    },
    {
      img: "https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame2.jpg?imwidth=3840",
      title: "kitchen appliances",
      des: "Small but mighty tools that make food prep a breeze.",
    },
  ];

  const trending_data = [
    "Mugs",
    "Blankets",
    "Cookie Cutter",
    "Air Fryers",
    "Kitchen Mixers",
    "Lamps",
    "Towels",
    "Tree Slirts",
    "Garland",
    "Fall Wreaths",
    "Christmas Trees",
    "Fireplaces",
  ];

  return (
    <>
      {/* Banner 1 */}
      <Hide below="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-2.svg"
        />
      </Hide>
      <Hide above="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-767x800_MBL-INTL.jpg"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-767x800_MBL-INTL-2.svg"
        />
      </Hide>

      {/* brand logos */}
      <BrandList title="Brands We Love" brandList={brand_data} />

      {/* Banner 2 */}
      <Hide below="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.jpg?imwidth=1920"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.svg?imwidth=3840"
        />
      </Hide>
      <Hide above="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-767x800_Promo1.jpg?imwidth=1080"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-767x800_Promo1.svg?imwidth=1080"
        />
      </Hide>

      {/* Categories list */}
      <CategoryList
        title="Beautiful Finds for Every Room"
        list={category_data}
      />

      {/* Season Carousel */}
      <MainCarousel title="Trending This Season" list={carousel_data} />

      {/* Banner 3 */}
      <Hide below="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.jpg?imwidth=1920"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.svg?imwidth=3840"
        />
      </Hide>
      <Hide above="md">
        <Banner
          image="https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-767x800_Promo2.jpg?imwidth=828"
          textImage="https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-767x800_Promo2v2.svg?imwidth=828"
        />
      </Hide>

      {/* Trending Searches */}
      <TrendingSearchList title="Trending Searches" list={trending_data} />
    </>
  );
};

export default Home;
