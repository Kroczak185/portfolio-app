import HeroImage from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Tlo from "./Tlo";

const Home = () => {
  return (
    <div
      id="HOME"
      className="md:h-screen h-full w-full"
    >
      <Tlo />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="md:w-0 w-full h-24 flex justify-center items-center empty:bg-transparent">

      </div>
        <div className="flex flex-col justify-center h-full" >
          <h2 className="text-4xl sm:text-7xl font-bold text-white p-6  bg-black bg-opacity-60">
          I want to be a software engineer
          </h2>
          <p className="text-gray-500 p-6  bg-black bg-opacity-60">
            I have completed my studies at Silesian University of Technology and I’m looking for my first professional experience in programming.  I'm capable of working in a team and learning quickly
          </p>

          <div className="p-6 bg-black bg-opacity-60">
            <Link
              to="LASTEST PROJECTS"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>


          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full"
          />
          <br />
      </div>
    </div>
  );
};

export default Home;