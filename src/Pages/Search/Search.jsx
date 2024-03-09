import { Link } from "react-router-dom";
import search_img from "../../assets/images/hero-2.png";
import { FaSearch } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // const [wdata, setWdata] = useState();
  // useEffect(() => {
  //     fetch("data.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setWdata(data);
  //     })
  // })

  return (

    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${search_img})` }}
    >

      <div className="hero-overlay bg-opacity-40"></div>
      <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="hero-content text-center text-neutral-content">
        <div>
          <div>
          <h1 className="mb-5 text-5xl font-bold text-yellow-400">Weather <span className="font-medium">Forecast</span></h1>
          <p className="mb-5 text-md text-gray-500">
          Your 24/7 Weather Update, Be ready, Always.
          </p>
          </div>
          <div className="flex justify-center items-center lg:gap-6 md:gap-1 gap-0">
          <input type="text" name="name" placeholder="Enter Your Location" className="p-4 lg:w-[400px] md:w-[300px] w-[250px] mx-auto rounded-xl outline-none border-0 shadow-xl text-black" />
          
          <Link><FaSearch className="text-4xl text-yellow-400 animate-pulse hover:animate-none"></FaSearch></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
