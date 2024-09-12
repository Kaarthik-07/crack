import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  backend?: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  // State for errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors when user modifies input
  };

  // Validation logic
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.username || formData.username.length < 4) {
      newErrors.username = "Username must be at least 4 characters long";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // console.log("Form Data being sent to API: ", formData);

      const response = await fetch("http://localhost:6969/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: formData.username,
          user_email: formData.email,
          user_password: formData.password,
          user_phone_number: formData.phoneNumber,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors({ backend: result.message });
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrors({ backend: "An error occurred. Please try again." });
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Sign Up
        </h1>
        {errors.backend && (
          <p className="text-red-600 text-center">{errors.backend}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.username ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}
            />
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.email ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.password ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.phoneNumber ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
