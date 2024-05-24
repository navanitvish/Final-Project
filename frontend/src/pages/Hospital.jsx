// import { useState, useEffect } from "react";
// import { doctorList } from "../utility/data";
// import image1 from "../assets/Avtar (1).png";
import SearchHospital from './SearchHospital'
// Component for the search interface
const SearchInterface = () => {

  return (
    <div className="bg-red-50 bg-cover  flex flex-col justify-evenly items-center mx-auto  p-12">
    <SearchHospital/>
    </div>
  );
};

export default SearchInterface;

// `https://api.example.com/doctors?query=${searchQuery}&availability=${availability}&filter=${filter}&sortBy=${sortBy}&location=${location}`
// //
