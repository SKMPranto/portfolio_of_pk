import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma In Computer Science and Technology",
      institution: "Bogura Polytechnic Institute",
      year: "",
      cgpa: "",
      description:
        "Relevant Coursework: Data Structures, Web Development, DBMS. ",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Beraiderchala Ideal School",
      year: "2022",
      cgpa: "5.0/5.0",
      description: "Completed high school with top grades in Science stream.",
    },
    {
      degree: "Junior School Certificate",
      institution: "Matrichaya Model School",
      year: "2019",
      cgpa: "5.0/5.0",
      description: "Completed high school with top grades in.",
    },
  ];

  return (
    <div className="my-16 px-5">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
        Educational Qualifications
      </h1>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-6 lg:space-y-0">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl border p-6 w-full lg:w-80 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{edu.degree}</h2>
            <h3 className="text-md font-medium text-gray-600">
              {edu.institution}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
            <p className="text-sm font-semibold">CGPA: {edu.cgpa}</p>
            <p className="mt-2 text-gray-700 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
