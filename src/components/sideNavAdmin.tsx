import { useState } from "react";

const SideNavAdmin = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "All Crackers", src: "/chart_fill", href: "/admin" },
    { title: "Orders", src: "/cart", href: "/admin/order" },
    { title: "Pending Orders", src: "/pending", href: "/admin/pending" },
    { title: "Completed Orders", src: "/checked", href: "/admin/checked" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } bg-black/80 h-screen p-5 pt-8 relative duration-300 flex flex-col`}
        >
          <img
            src="./control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./firework.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg] w-5 h-5"
              }`}
            />
            <h1
              className={`text-white origin-left font-vt323 text-5xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              DASHBOARD
            </h1>
          </div>
          <ul className="pt-6 flex-1 ">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex hover:bg-black/20 duration-200 rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
        ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
              >
                <a
                  href={Menu.href || "#"} // Provide a default value if href is undefined
                  className="flex items-center w-full h-full "
                >
                  <img src={`./${Menu.src}.png`} className="w-6 h-6" />
                  <span
                    className={`${
                      !open && "hidden"
                    } ml-6 origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href="/login">
            <li className="flex rounded-md p-2 cursor-pointer  text-red-500 text-4xl hover:bg-red-800 hover:text-white font-vt323  items-center gap-x-4 mt-auto">
              <img src="./logout.png" className="w-85 h-8" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </li>
          </a>
        </div>
        <div className="h-screen flex-1 p-7">{/* Content goes here */}</div>
      </div>
    </>
  );
};

export default SideNavAdmin;
