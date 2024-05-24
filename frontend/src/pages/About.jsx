import React from "react";
import Footer from "../pages/Footer";
const About = () => {
  const projectMembers = [
    {
      name: "Shubham Sahay",
      role: "Project Team Leader",
      description:
        "A project team leader guides, motivates, plans, communicates, resolves conflicts, fosters growth, ensures quality, manages risks, and takes accountability.",
      image: "/src/assets/leader.jpg",
    },
    {
      name: "Suraj Mishra",
      role: "Developer",
      description:
        "A Python developer designs, codes, tests, and debugs software solutions using Python, specializing in areas like , machine learning, and automation, while staying abreast of industry trends.",
      image: " /src/assets/developer.jpg",
    },
    {
      name: "Navanit Vishwakarma",
      role: "Designer and Developer",
      description:
        "A designer crafts visual concepts, while a developer creates functional solutions. Both collaborate to produce innovative products, balancing creativity with technical expertise.",
      image: "/src/assets/Designer.jpg",
    },
    {
      name: "Tushar Gupta",
      role: "Tester",
      description:
        "A tester evaluates software functionality, identifying bugs and ensuring quality. They collaborate with developers to resolve issues and maintain product reliability.",
      image: "/src/assets/tester.jpg",
    },
  ];

  const mentors = [
    {
      name: "Neha Chandela",
      role: "Mentor",
      description:
        "Mrs,Neha Chandela provides guidance and support to our team.",
      image: "/src/assets/Avtar (1).png",
    },
    {
      name: "Dr. Pratibha singh",
      role: "Mentor / HOD",
      description: "Dr. Pratibha singh his expertise in Python.",
      image: "/src/assets/Avtar (1).png",
    },
    {
      name: "Madhukar Yadav",
      role: "Mentor",
      description:
        "Madhukar Yadav offers insights into software development practices.",
      image: "/src/assets/Avtar (1).png",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 overflow-hidden mt-10 mb-8">
        <h2 className="text-4xl font-bold text-center my-4">Project Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectMembers.map((member, index) => (
            <div
              key={index}
              className="bg-red-50 shadow-lg rounded-lg p-6 max-w-md mx-auto hover:bg-green-100 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center my-4">Project Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mt-4">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-red-50 shadow-lg rounded-lg p-6 max-w-md mx-auto hover:bg-green-100 transition duration-300"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-gray-600 mt-2">{mentor.role}</p>
              <p className="text-gray-600 mt-2">{mentor.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
