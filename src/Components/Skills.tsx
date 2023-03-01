import React from "react";

import net from "../assets/techlogos/net.png";
import csharp from "../assets/techlogos/csharp.png";
import typescript from "../assets/techlogos/ts.png";
import react from "../assets/techlogos/react.png";
import cpp from "../assets/techlogos/cpp.png";
import java from "../assets/techlogos/java.png";
import sql from "../assets/techlogos/sql.png";
import photoshop from "../assets/techlogos/photoshop.png";
import swift from "../assets/techlogos/swift.png";
import github from "../assets/techlogos/github.png";

const techs = [
    {
        id: 1,
        src: net,
        title: ".NET",
        style: "shadow-cyan-500",
    },
    {
        id: 2,
        src: csharp,
        title: "C#",
        style: "shadow-purple-500",
    },
    {
        id: 3,
        src: typescript,
        title: "Typescript",
        style: "shadow-cyan-500",
    },
    {
        id: 4,
        src: react,
        title: "React",
        style: "shadow-sky-600",
    },
    {
        id: 5,
        src: cpp,
        title: "C++",
        style: "shadow-sky-400",
    },
    {
        id: 6,
        src: java,
        title: "Java",
        style: "shadow-orange-500",
    },
    {
        id: 7,
        src: sql,
        title: "SQL",
        style: "shadow-blue-400",
    },
    {
        id: 8,
        src: photoshop,
        title: "Photoshop",
        style: "shadow-blue-400",
    },
    {
        id: 9,
        src: swift,
        title: "Swift",
        style: "shadow-orange-400",
    },
    {
        id: 10,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
    },
];

export default function Skills() {
    return (
        <div id="SKILLS"
            className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen h-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-y-10 gap-x-10 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}