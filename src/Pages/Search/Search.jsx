import { Link } from "react-router-dom";
import search_img from "../../assets/images/solid.png";
import { FaSearch, FaWind } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdWaves } from "react-icons/md";
import clear_icon from "../../assets/images/Assets/Assets/rain.png";
import cloud_icon from "../../assets/images/Assets/Assets/cloud.png";
import drizzle_icon from "../../assets/images/Assets/Assets/drizzle.png";
import rain_icon from "../../assets/images/Assets/Assets/rain.png";
import snow_icon from "../../assets/images/Assets/Assets/snow.png";

const Search = () => {
  useEffect(() => {
    Aos.init();
    search("Dhaka")
  }, []);

  let api_key = "66e0be18fa493f93e7ba93ce26949624";

  const [wicon, setWicon] = useState(clear_icon);

  const search = async (searchLocation) => {
    // const element = document.getElementsByClassName("locationName");
    // const searchLocation = element[0].value;
    console.log(searchLocation);

    if (searchLocation === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
    {
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
    {
      setWicon(snow_icon);
    }
    else
    {
      setWicon(clear_icon);
    }




  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${search_img})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="hero-content text-center text-neutral-content"
      >
        <div className=" p-10 rounded-lg shadow-xl bg-purple-700 bg-opacity-40">
          <div>
            {/* <h1 className="mb-5 text-5xl font-bold text-yellow-400">Weather <span className="font-medium">Forecast</span></h1> */}
            {/* <p className="mb-5 text-md text-gray-500">
          Your 24/7 Weather Update, Be ready, Always.
          </p> */}
          </div>
          <div className="flex justify-center items-center lg:gap-6  gap-2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Location"
              className="locationName p-2 lg:w-[300px] md:w-[300px] w-[200px] mx-auto rounded-[200px] outline-none border-0 shadow-xl text-black"
            />

            <div
              className=""
              onClick={() => {
                search(document.getElementsByClassName("locationName")[0].value);
              }}
            >
              <Link>
                <FaSearch className="text-4xl text-yellow-400 animate-pulse hover:animate-none"></FaSearch>
              </Link>
            </div>
          </div>
          

          <div>
            <div className="flex justify-center">
              {/* <FaCloudRain className="text-8xl my-6 text-center"></FaCloudRain> */}
              <img src={wicon} alt="" />
            </div>
            <h1 className="text-center text-6xl text-white weather-temp py-2">
              29{" "}
              <sup>
                {" "}
                <span className="text-2xl">o</span>c
              </sup>
            </h1>
            <h2 className="weather-location text-center text-4xl text-yellow-400 font-bold">Dhaka</h2>

            <div className="flex justify-between items-center p-2 lg:p-8 gap-4">
              {/* left */}
              <div className="flex items-center gap-4">
                <MdWaves className="text-2xl"></MdWaves>
                <div>
                  <p className="humidity-percentage font-bold">60%</p>
                  <p>humidity</p>
                </div>
              </div>

              {/* right */}
              <div className="flex items-center gap-4">
                <FaWind className="text-2xl"></FaWind>
                <div>
                  <p className="wind-speed font-bold">10km/h</p>
                  <p>wind-speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
