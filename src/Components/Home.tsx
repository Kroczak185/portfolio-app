import react from "react";
import HeroImage from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home(){
    return(
        <div id="HOME"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I want to be a software engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have completed my studies at Silesian University of Technology and I’m looking for my first professional experience in programming.  I'm capable of working in a team and learning quickly
          </p>

          <div>
            <Link
              to="LASTEST PROJECTS"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full px-10"
          />
        </div>
      </div>
    </div>
    )
}