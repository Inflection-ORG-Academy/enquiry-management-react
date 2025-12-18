import React, { useEffect, useState } from "react";

const Enquiries = () => {
  const [allEnquiries, setAllEnquiries] = useState([]);

  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const res = await fetch("http://localhost:3000/enquiries");
        const data = await res.json();
        setAllEnquiries(data);
      } catch (err) {
        console.log(err);
      }
    };

    getEnquiries();
  }, []);

  return (
    <div>
      <h2 className="mb-5">All Enquiries</h2>
      <div className="grid gap-2">
        {allEnquiries.map((enquiry) => (
          <div className="border p-2">
            <label>{enquiry.enquiryFor}</label>
            <h3>{enquiry.name}</h3>
            <p>Mobile No.: {enquiry.mobileNo}</p>
            <p>email: {enquiry.email}</p>
            <p>Message : {enquiry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;
