import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavBar() {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "HOME",
    },
    {
      id: 2,
      link: "LASTEST PROJECTS",
    },
    {
      id: 3,
      link: "SKILLS",
    },
  ];

  return (
    <div className="flex justify-center  items-center w-full h-20 px-4 text-white bg-black fixed space-x-96">
      <div>
        <p className="font-signature text-3xl">Want to be an engineer</p>
      </div>
      <ul className="hidden md:flex">
        {links.map(x =>
          <li key={x.id} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200">
            <Link to={x.link} smooth duration={500}>
              {x.link}
            </Link>
          </li>
        )}

      </ul>
      <div onClick={() => { setNav(!nav) }} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

