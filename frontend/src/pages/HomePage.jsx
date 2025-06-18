import Banner from "@/components/common/Banner";
import Hero from "@/components/common/Hero";
import SpecialityMenu from "@/components/common/SpecialityMenu";
import TopDoctors from "@/components/common/TopDoctors";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default HomePage;
