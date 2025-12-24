import React, { useEffect, useState } from "react";
import EnquiryForm from "./components/EnquiryForm";
import Enquiries from "./components/Enquiries";

const App = () => {
  const [allEnquiries, setAllEnquiries] = useState([]);
  const [isFormSumited, setIsFormSumited] = useState(true);

  const handleDeleteEnquiry = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/enquiries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setIsFormSumited(!isFormSumited);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/enquiries?_sort=-createdAt"
        );
        const data = await res.json();
        setAllEnquiries(data);
      } catch (err) {
        console.log(err);
      }
    };

    getEnquiries();
  }, [isFormSumited]);

  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      <EnquiryForm onSubmit={() => setIsFormSumited(!isFormSumited)} />
      <Enquiries
        allEnquiries={allEnquiries}
        deleteEnquiry={handleDeleteEnquiry}
      />
    </div>
  );
};

export default App;
