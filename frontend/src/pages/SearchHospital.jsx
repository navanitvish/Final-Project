import React, { useState } from "react";

// Import PDF files for each district
import deoriaPDF from "../assets/1677256154765.pdf";
import lucknowPDF from "../assets/lucknowdata.pdf";
import kanpurPDF from "../assets/Ghaziabad.pdf";
import varanasiPDF from "../assets/varanasi.pdf";
import gorakhpurPDF from "../assets/gorakhpur.pdf";
import kousholPDF from "../assets/Utterkhand.pdf";
const SearchHospital = () => {
  const [stateInput, setStateInput] = useState("");
  const [districtInput, setDistrictInput] = useState("");
  const [pdfContent, setPdfContent] = useState("");

  // Define PDF file mapping
  const pdfMapping = {
    "uttar pradesh": {
      "deoria": deoriaPDF,
      "lucknow": lucknowPDF,
      "ghaziabad": kanpurPDF,
      "varanasi": varanasiPDF,
      "gorakhpur": gorakhpurPDF,
      "Koushol": kousholPDF,
      // Add more districts as needed
    },
    // Add more states as needed
    // 'Uttrauttrakhand': {

    //   gaya: 'gaya.pdf',
    //   muzaffarpur: 'muzaffarpur.pdf',
    //   bhagalpur: 'bhagalpur.pdf',
    //   darbhanga: 'darbhanga.pdf',
    //   // Add more districts as needed
    // },
    // Add more states as needed
    // Example:
    // 'stateName': {
    //   'districtName': 'pdfFileName.pdf',
    //   // Add more districts as needed
    // },
  };

  const handleSearch = () => {
    // Normalize state and district input to lowercase for consistent comparison
    const normalizedState = stateInput.toLowerCase();
    const normalizedDistrict = districtInput.toLowerCase();

    // Check if the state exists in the PDF mapping
    if (pdfMapping[normalizedState]) {
      // Check if the district exists in the state's PDF mapping
      if (pdfMapping[normalizedState][normalizedDistrict]) {
        // If the PDF file exists, set its content
        setPdfContent(pdfMapping[normalizedState][normalizedDistrict]);
      } else {
        // If the district doesn't exist, display an error
        setPdfContent(
          `PDF file for ${normalizedDistrict} district in ${normalizedState} not found.`
        );
      }
    } else {
      // If the state doesn't exist, display an error
      setPdfContent(`PDF mapping for ${normalizedState} state not found.`);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Find Hospitals</h1>
      <div className="mb-4">
        <label htmlFor="stateInput" className="block mb-2">
          State:
        </label>
        <input
          type="text"
          id="stateInput"
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="districtInput" className="block mb-2">
          District:
        </label>
        <input
          type="text"
          id="districtInput"
          value={districtInput}
          onChange={(e) => setDistrictInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Result</h2>
        <div className="border border-gray-300 rounded p-4">
          {pdfContent ? (
            <iframe
              src={pdfContent}
              className="w-full h-screen object-cover"
            ></iframe>
          ) : (
            <p>No PDF content to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHospital;
