import React, { useState } from "react";
import { buttons } from "../utility/data";
const Assistance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const topics = {
    Cold: "Cold",
    Headache: "Headache",
    Diabetes: "Diabetes",
    Fever: "Fever",
    cough: "cough",
    BodyPain: "BodyPain",
  };

  const handleTopicClick = (topic) => {
    setSearchTerm(topic);
  };

  const handleSearch = () => {
    if (searchTerm) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
      window.open(searchUrl, "_blank");
    }
  };
  return (
    <section className="bg-cover bg-center py-4 py-40">
      <img src="" alt="" />
      <div className="w-11/12 m-auto flex flex-wrap justify-center items-center gap-12 ">
        {/* left-side */}
        <div className="w-[500px] mx-8">
          <img src="/src/assets/2docter.svg" alt="" />
        </div>
        {/* Right-side text content */}
        <div className="w-[400px]  md:text-left flex flex-col gap-4">
          <h3 className="font-bold text-[20px] text-balance leading-[1.2] text-black flex flex-col">
            Get assistance through <br /> our community topic
          </h3>
          <p className="text-xl text-black text-lg my-4 font-normal">
            Make connections with people who have similar health stories and
            exchange advice on our forums. Our forums covers a wide range of
            health topics. Medical Experts also add insight to these topics
            regularly.
          </p>
          <div className="flex flex-col ">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {Object.entries(topics).map(([key, value]) => (
                <button
                  key={key}
                  className="py-4 px-6 bg-green-500 text-white text-lg font-bold rounded hover:bg-blue-600"
                  onClick={() => handleTopicClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="flex items-center mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 text-lg font-bold  rounded mr-2 w-[200px]"
                placeholder="Search for topics..."
              />
              <button
                className="py-4 px-8 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistance;
