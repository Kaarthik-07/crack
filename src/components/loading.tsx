import React from "react";

const Loading: React.FC = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen"> 
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black">
        </div>
          <h1 className="ml-2 text-8xl font-vt323">LOADING</h1>
    </div>
    </>
  );
};

export default Loading;
