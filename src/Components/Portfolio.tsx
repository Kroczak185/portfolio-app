import grs from "../assets/portfolio/backgroundRemover.png";
import hoduje from "../assets/portfolio/hoduje.png";
import restaurant from "../assets/portfolio/restaurant.png";

const portfolios = [
    {
        id: 1,
        src: hoduje,
        link: "https://github.com/Kroczak185/Hoduje",
    },
    {
        id: 2,
        src: restaurant,
        link: "https://github.com/Kroczak185/Restaurant",
    },
    {
        id: 3,
        src: grs,
        link: "https://github.com/Kroczak185/Background-Remover",
    },
];
            

export default function Portfolio() {
    return (
        <div id="LASTEST PROJECTS"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Latest projects
                    </p>
                    <p className="py-6">These are lastest projects that i created</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-5 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link }) => (
                        <a href={link} target="_blank" rel="noreferrer">
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img
                                    src={src}
                                    alt=""
                                    className="rounded-md duration-200 hover:scale-105"

                                />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/4 px-3 py-1 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}