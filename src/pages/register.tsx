import React from "react";

const Register = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Sign Up
        </h1>

        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between"></div>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label
              for="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Already have an account?
            <a href="/login" className="text-black hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
