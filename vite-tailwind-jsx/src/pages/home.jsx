import React from "react";
import Nav from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div
        id="hero"
        className="flex flex-col items-center justify-center h-[100vh]"
      >
        <img
          src="/hero.png"
          alt="Hero"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Features Section */}
      <div id="features" className="py-10 h-[60vh]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bungee-shade">
          FEATURES 🚀
        </h1>
      </div>

      {/* Contribute Section */}
      <div
        id="contribute"
        className="flex flex-col items-center justify-center h-[100vh]"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bungee-shade">
          CONTRIBUTE 🌟
        </h1>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="flex flex-col items-center justify-center h-[100vh]"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bungee-shade">
          CONTACT 📞
        </h1>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
              href="#"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img
                  src="/hero.png"
                  alt="Logo"
                  className="h-[100px] w-[100px] max-w-full max-h-full object-contain"
                />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#features"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#contribute"
                >
                  Contribute
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
