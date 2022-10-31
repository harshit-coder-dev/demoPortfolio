import React from "react";
import "./responsive.css";
import GitHubCalendar from 'react-github-calendar';
const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-24 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        An enthusiastic, self-motivated, and ambitious full-stack web developer with 6 months+ of hands-on coding experience in frontend and backend skills like HTML, CSS, JavaScript, React, Redux, NodeJs, Express, and MongoDB. Excellent programming record and a brilliant team player who can work collaboratively with the team even in adverser situations and short deadlines.
        </p>
        <GitHubCalendar username="hartumpa" />
        <br />
      </div>
    </div>
  );
};

export default About;