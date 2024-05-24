import React from "react";

const Consultation = () => {
  const doctors = [
    {
      name: 'Dr. Keshav Divedi',
      image: './src/assets/Doctor (1).jpg',
      contact: '9834524673',
      desc:"Dermatologist: Manages skin, hair, and nail conditions, from acne to skin cancer, offering medical, surgical, and cosmetic interventions."
    },
    {
      name: 'Dr. Reeta arora',
      image: './src/assets/Doctor (2).jpg',
      contact: '555-555-5556',
      desc:"Neurologist: Addresses disorders of the nervous system, including headaches, epilepsy, stroke, and neurodegenerative diseases like Alzheimer's and Parkinson's."
    },
    {
      name: 'Dr. Usha Tiwari',
      image: './src/assets/Doctor (3).jpg',
      contact: '555-555-5555',
      desc:"Oncologist: Focuses on cancer diagnosis, treatment, and prevention, using therapies such as chemotherapy, radiation, and immunotherapy."
    },
    {
      name: 'Dr. SiKha Mishra',
      image: './src/assets/docder (1).jpg',
      contact: '555-555-5556',
      desc:"Pediatrician: Provides medical care for infants, children, and adolescents, covering physical, emotional, and developmental aspects of health."
    },
    {
      name: 'Dr. DK Sharma',
      image: './src/assets/docder (2).jpg',
      contact: '555-555-5555',
      desc:"Oncologist: Focuses on cancer diagnosis, treatment, and prevention, using therapies such as chemotherapy, radiation, and immunotherapy."
    },
    {
      name: 'Dr. Puja Kumari',
      image: './src/assets/docder (1).jpg',
      contact: '555-555-5556',
      desc:"Cardiologist: Specializes in heart health, diagnosing and treating heart diseases such as coronary artery disease, heart failure, and arrhythmias."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  bg-red-50 p-6">
      {doctors.map((doctor, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-4 mt-8 hover:bg-green-100 h-[300px] mb-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img className="object-cover w-full h-full" src={doctor.image} alt={`${doctor.name} image`} />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">{doctor.name}</h2>
            <p className="text-gray-700 mt-2">Contact: {doctor.contact}</p>
            <p className="text-gray-700 mt-2 text-md p-4">Description: {doctor.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consultation;