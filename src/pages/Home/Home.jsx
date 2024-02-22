import MainBanner from "../../components/MainBanner/MainBanner";
import MainSlider from "../../components/MainSlider/MainSlider";
import Services from "../../components/Services/Services";
import Opinion from "../../components/Opinion/Opinion";
const Home = () => {
  return (
    <>
      <MainSlider />
      <MainBanner />
      <Services />
      <Opinion />
    </>
  );
};

export default Home;
