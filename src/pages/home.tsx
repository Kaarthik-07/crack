import ProductCard from "../components/productCard";

const Home = () => {
  // const pushCategory = () =>{
  //   window.location.href = 'https://localhost:5173/category'
  // }
  const infoItems = [
    {
      icon: (
        <img
          className="h-8 w-8 text-orange-500"
          src="./orange_cart.png"
          alt="orange_cart"
        />
      ),
      title: "MINIMUM ORDER VALUE",
      description: "₹ 1,999 (TN, BLRE & PY)",
    },
    {
      icon: (
        <img src="/van.png" className="h-8 w-8 text-orange-500" alt="van" />
      ),
      title: "HOME DELIVERY",
      description: "(TN, BLRE & PY ONLY)",
    },
    {
      icon: (
        <img src="/stats.png" className="h-8 w-8 text-orange-500" alt="stats" />
      ),
      title: "OTHER STATES",
      description: "MINIMUM ORDER ₹6,000",
    },
    {
      icon: <img src="/offer.png" className="h-8 w-8" alt="offer" />,
      title: "UPTO 80% OFF",
      description: "QUALITY PACKING GUARANTEED.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-gray-200 bg-white">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-r md:border-r-0 border-gray-200 px-6 py-2"
            >
              <div className="mr-3">{item.icon}</div>
              <div>
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl p-2 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-vt323">
            IN THE SPOTLIGHT
          </h1>
          <div className="flex-grow h-[2px] bg-[#FF6700] ml-4"></div>
        </div>
        <div className="flex justify-end -mt-4">
          <a
            href= '/viewAll'  
            className="text-center text-black font-bold text-md hover:underline "
            style={{ transform: "translateY(-150%)" }}
          >
            View All
          </a>
        </div>
      </div>
      <div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
