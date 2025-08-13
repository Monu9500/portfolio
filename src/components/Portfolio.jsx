import React from "react";
import NewsApp from "../asssets/portfolio/NewsApp.jpg";
import SnakeGame from "../asssets/portfolio/SnakeGame.jpg";
import WeatherApp from "../asssets/portfolio/WeatherApp.jpg";
import PoultryDisease from "../asssets/portfolio/PoultryDisease.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title : "News App",
      src: NewsApp,
      demoLink: "https://github.com/Monu9500/News-App/blob/main/News%20App.pdf",
      codeLink: "https://github.com/Monu9500/News-App",
    },
    {
      id: 2,
      title : "Snake Game",
      src: SnakeGame,
      demoLink: "https://github.com/Monu9500/Snake-Game/blob/main/SnakeGame.pdf",
      codeLink: "https://github.com/Monu9500/Snake-Game",
    },
    {
      id: 3,
      title : "Weather App",
      src: WeatherApp,
      demoLink: "https://github.com/Monu9500/WeatherApp/blob/main/WeatherApp.pdf",
      codeLink: "https://github.com/Monu9500/WeatherApp",
    },
    {
      id: 4,
      title : "Poultry Disease Detection",
      src: PoultryDisease,
      demoLink: "https://aquamarine-cuchufli-2f49b0.netlify.app/dashboard.html",
      codeLink: "https://github.com/Monu9500/Poultry-Disease",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



// #########################################################################################################

// import React from "react";
// import NewsApp from "../asssets/portfolio/NewsApp.jpg";
// import SnakeGame from "../asssets/portfolio/SnakeGame.jpg";
// import WeatherApp from "../asssets/portfolio/WeatherApp.jpg";
// import PoultryDisease from "../asssets/portfolio/PoultryDisease.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       title: "News App",
//       src: NewsApp,
//       demoLink: "https://github.com/Monu9500/News-App/blob/main/News%20App.pdf",
//       codeLink: "https://github.com/Monu9500/News-App",
//     },
//     {
//       id: 2,
//       title: "Snake Game",
//       src: SnakeGame,
//       demoLink: "https://github.com/Monu9500/Snake-Game/blob/main/SnakeGame.pdf",
//       codeLink: "https://github.com/Monu9500/Snake-Game",
//     },
//     {
//       id: 3,
//       title: "Weather App",
//       src: WeatherApp,
//       demoLink: "https://github.com/Monu9500/WeatherApp/blob/main/WeatherApp.pdf",
//       codeLink: "https://github.com/Monu9500/WeatherApp",
//     },
//     {
//       id: 4,
//       title: "Poultry Disease Detection",
//       src: PoultryDisease,
//       demoLink: "https://aquamarine-cuchufli-2f49b0.netlify.app/dashboard.html",
//       codeLink: "https://github.com/Monu9500/Poultry-Disease",
//     },
//   ];

//   return (
//     <div
//       name="projects"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Projects
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, title, src, demoLink, codeLink }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt={title}
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <p className="text-center mt-2 font-semibold">{title}</p>
//               <div className="flex items-center justify-center">
//                 <a
//                   href={demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
//                 >
//                   Demo
//                 </a>
//                 <a
//                   href={codeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
//                 >
//                   Code
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
