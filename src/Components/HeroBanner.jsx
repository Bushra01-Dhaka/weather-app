import { Link } from "react-router-dom";
import banner_img from "../assets/images/hero-1.png"

const HeroBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${banner_img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content flex justify-center items-center p-8">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-yellow-400">Weather <span className="font-medium">Forecast</span></h1>
          <p className="mb-5 text-md text-gray-500">
          Your 24/7 Weather Update, Be ready, Always.
          </p>
          <Link><button className="btn btn-primary rounded-lg bg-yellow-400 border-none text-purple-950 w-[120px] font-bold uppercase hover:bg-yellow-500">Get Start</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
