import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import image from "../assets/login.svg";
import { toast } from "react-toastify";
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:6005/api/users/login", {
        email,
        password,
      });
      console.log(res.data); // Log the response data
      setLoading(false);
      setIsLoggedIn(true);
      toast.success("Signup successful!"); // Show success toast
      navigate("/home"); // Navigate to the home page
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error:", err.response.data);
        setError(err.response.data.msg || "Invalid email or password.");
      } else if (err.request) {
        // Request was made but no response received
        console.error("Network Error:", err.request);
        setError("Network error. Please try again.");
      } else {
        // Something else happened
        console.error("Error:", err.message);
        setError("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  const validateForm = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 8;

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
    } else if (!isValidPassword) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError("");
      return true;
    }

    return false;
  };

  const handleSubmitWithValidation = (e) => {
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  const handleBlur = () => {
    validateForm();
  };

  return (
    <div className="flex flex-wrap items-center justify-center h-screen  gap-14 bg-red-50">
      <div className="bg-white rounded-lg shadow-md p-10 w-[400px] h-[400px]">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmitWithValidation}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              className="border border-gray-400 p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleBlur}
              className="border border-gray-400 p-2 w-full"
              required
            />
          </div>
         <div className="flex flex-row justify-between">
         <button
            type="submit"
            className={`bg-green-500 text-white py-3 px-6 text-xl rounded hover:bg-green-600 hover:text-black ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link to="/SignUp">
                  <button className="text-xl font-semibold hover:text-black  bg-green-500 text-white py-3 px-6  rounded">
                    Sign Up
                  </button>
                </Link>
         </div>
          
        </form>
      </div>
      <div className="max-w-[400px]">
        <img src={image} alt="SignUp Image" width={1024} height={490} />
      </div>
    </div>
  );
};

export default Login;
