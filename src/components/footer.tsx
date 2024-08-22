const Footer = () => {
  return (
    <>
      <div className="flex items-end w-full min-h-screen">
        <footer className="w-full  text-gray-700 bg-gray-100 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-auto md:text-left lg:mx-auto">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                {/* <img src="/logo.png" className="w-10 h-10" alt="logo" /> */}
              </a>
              <p className="mt-2 text-sm gradient-text">
                Here’s Wishing You and Your Family a Sparkling Diwali!
              </p>

              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <img
                      src="/facebook.png"
                      className="w-5 h-5"
                      alt="facebook"
                    />
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <img
                      src="/linkedin.png"
                      className="w-5 h-5"
                      alt="linkdein"
                    />
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <img
                      src="/instagram.png"
                      className="w-5 h-5"
                      alt="twitter"
                    />
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <img src="/twitter.png" className="w-5 h-5" alt="twitter" />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Quick Link
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Crackers
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      My orders
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Contact Support
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <p className="text-gray-500">
                      (Wholesale & Retailer) 6/732, Meenatchi Colony, Pallapatti
                      Panchayat, Sivakasi.
                    </p>
                    <p className="text-gray-500">
                      <span className="font-bold text-black">Phone No:</span>{" "}
                      7598419291 / 9443139291
                    </p>
                    <p className="text-gray-500">
                      <span className="font-bold text-black">Email:</span>{" "}
                      shreedharma@gmail.com
                    </p>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize text-center">
                © Shree Varma 2024 All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>{" "}
    </>
  );
};
export default Footer;
