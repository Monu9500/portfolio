import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Ambitious 4th year B.Tech student at the University of Engineering and Management Kolkata, with a diverse technical skill set and a passion for innovation🚀.Proficient in a range of programming languages including C,C++,Python. Focused on honing my skills in machine learning and data science, with experience in technologies like React.js, SQL, PowerBI, and statistics. Possess deep knowledge of IoT with hands-on experience.🧑‍💻
        </p>

        <br />

        <p className="text-xl">
        Seeking opportunities to apply my multifaceted technical expertise. Eager to collaborate with like-minded professionals and contribute to cutting-edge solutions that make a real impact. Committed to continuous learning and personal growth, to stay ahead of the curve in an ever-evolving technological landscape.📈
        </p>
      </div>
    </div>
  );
};

export default About;