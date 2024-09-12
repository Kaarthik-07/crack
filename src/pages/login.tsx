import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate(); // Initialize the hook
  const [formaData,setFormData] = useState<FormData>({email:"",password:""});
  const handleLogin = async() =>{
    try{
      const result = await axios.post('http://localhost:6969/user/siginin')
      
    }catch(err){
      console.log(err)
    }finally{
      
    }
  }

  return (
    <>
    <div className="mr-14 flex justify-end">
      <h1 className="font-vt323 text-2xl">ADMIN</h1>
    </div>
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Login
        </h1>
        <form
          action="#"
          method="POST"
          className="space-y-4"
          onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
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
              htmlFor="password"
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
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Didn't have an account?{" "}
            <a href="/register" className="text-black hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
