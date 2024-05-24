import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/undraw_mobile_profile_7hvy.svg";
const Signup = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:6005/api/users/signup", {
        name,
        email,
        password,
      });
      console.log(res.data); // Log the response data
      setLoading(false);
      setIsLoggedIn(true); // Set isLoggedIn to true
      toast.success("Signup successful!"); // Show success toast
      navigate("/home");
      // Redirect or show success message
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error:", err.response.data);
        setError(err.response.data.msg || "Error signing up.");
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

  return (
    <div className="flex flex-wrap items-center justify-center h-screen gap-14 bg-red-50">
      <div className="bg-white rounded-lg shadow-md p-10 w-[400px] h-[450px]">
        <h2 className="text-4xl font-bold mb-6 text-center">Signup</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              {loading ? "Signing up..." : "Signup"}
            </button>

            <Link to="/login">
              <button className=" text-xl font-semibold hover:text-black  bg-green-500 text-white py-3 px-6  rounded">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="max-w-[350px]">
        <img src={image} alt="SignUp Image" width={1024} height={490} />
      </div>
    </div>
  );
};

export default Signup;
