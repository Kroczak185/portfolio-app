import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {

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
    </div>
  )
}

