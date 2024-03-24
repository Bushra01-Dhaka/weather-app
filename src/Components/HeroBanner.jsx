import { Link } from "react-router-dom";
import banner_img from "../assets/images/hero-1.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Navbar from "./Navbar";

const HeroBanner = () => {
    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
        <div
      className="hero min-h-[100vh]"
      style={{
        backgroundImage:
          `url(${banner_img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content flex justify-center items-center p-8">
        <div className="max-w-md" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1 className="mb-5 text-5xl font-bold text-yellow-400">Weather <span className="font-medium animate-pulse">Forecast</span></h1>
          <p className="mb-5 text-md text-gray-500">
          Your 24/7 Weather Update, Be ready, Always.
          </p>
          <Link to="/searchBar"><button className="btn btn-primary rounded-[50px] bg-yellow-400 border-none animate-bounce text-purple-950 w-[120px] font-bold uppercase hover:bg-yellow-300 hover:animate-none mt-8">Get Start</button></Link>
        </div>
      </div>
    </div>
    {/* <Navbar></Navbar> */}
    </div>
  );
};

export default HeroBanner;
