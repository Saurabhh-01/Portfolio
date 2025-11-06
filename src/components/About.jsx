import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongo.png";
import pythonLogo from "../assets/python.png";

const skills = [
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
  nodeLogo,
  expressLogo,
  mongoLogo,
  pythonLogo,
];

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg max-w-3xl text-center mb-12">
        I am a passionate full-stack developer who loves turning ideas into digital reality. 
        With expertise in modern web technologies, I enjoy crafting responsive, 
        user-friendly applications that make an impact. My curiosity drives me to 
        continuously learn and adapt in this fast-paced world of technology.
      </p>

      {/* Skills Ticker */}
      <div className="max-w-3xl w-full overflow-hidden border-t border-b py-4">
        <div className="flex animate-scroll gap-8">
          {skills.concat(skills).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="skill"
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
