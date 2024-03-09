import { Link } from "react-router-dom";
import search_img from "../../assets/images/hero-2.png";
import { FaSearch } from 'react-icons/fa';
const Search = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${search_img})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex justify-center items-center gap-6">
          <input type="text" name="name" placeholder="Enter Your Location" className="p-4 lg:w-[500px] md:w-[300px] w-[250px] mx-auto rounded-xl outline-none border-0 shadow-xl text-black" />
          <Link><FaSearch className="text-4xl text-yellow-400 animate-pulse hover:animate-none"></FaSearch></Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
