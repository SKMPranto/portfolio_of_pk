import React from "react";
import { FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  return (
    <div className="my-15">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
        How to Reach me
      </h1>
      <div className="bg-base-200 w-96 mx-auto rounded-2xl border p-10 text-xl">
        <h2> Email : prantokumar3463@gmail.com</h2>
        <h2>Phone : 01717-843463</h2>
        <h2>Location : Dhaka, Bangladesh</h2>
        <button
          onClick={() => {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Resume is not available",
              showConfirmButton: false,
              timer: 2000,
            });
          }}
          className="btn btn-wide btn-info mt-5 ml-5 text-lg"
        >
          <FaDownload size={20} /> Download Resume{" "}
        </button>
      </div>
    </div>
  );
};

export default Contact;
