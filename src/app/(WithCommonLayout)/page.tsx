import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialties from "@/components/UI/HomePage/Specialties/Specialties";
import Stats from "@/components/UI/HomePage/Stats/Stats";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialties></Specialties>
      <TopRatedDoctors></TopRatedDoctors>
      <WhyUs></WhyUs>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
    </>
  );
};

export default HomePage;
