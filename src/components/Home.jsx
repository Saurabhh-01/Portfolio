import { useEffect, useState } from "react";

export default () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  
  return (
    <div className="relative p-8">
      <div
        className="absolute inset-0 blur-xl h-40 sm:h-56 md:h-80"
      ></div>
      <div className="relative">
        <section id="home">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-extrabold">
                Build your SaaS exactly how you want
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                I'm a Full Stack Web Developer passionate about building scalable web applications and solving
                real-world problems through code.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
