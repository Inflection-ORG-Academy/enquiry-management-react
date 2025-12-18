import React from "react";
import EnquiryForm from "./components/EnquiryForm";
import Enquiries from "./components/Enquiries";

const App = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <EnquiryForm />
      <Enquiries />
    </div>
  );
};

export default App;
