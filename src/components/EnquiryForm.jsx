import React, { useState } from "react";

const EnquiryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [enquiryFor, setEnquiryFor] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const enquiryDetails = {
        name,
        enquiryFor,
        mobileNo,
        email,
        message,
        createdAt: new Date().toISOString(),
      };
      console.log(enquiryDetails);

      await fetch("http://localhost:3000/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryDetails),
      });

      setIsLoading(false);
      console.log("Form Submitted");
      onSubmit();
      setName("");
      setEmail("");
      setEnquiryFor("");
      setMobileNo("");
      setMessage("");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 border">
      <h1 className="text-2xl font-semibold text-center">Enquiry Form</h1>

      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full py-1 px-2 border border-neutral-700 outline-none focus:border-neutral-900"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="enquiryFor" className="text-sm">
          Enquiry For
        </label>
        <select
          id="enquiryFor"
          name="enquiryFor"
          className="w-full py-1 px-2 border border-neutral-700 outline-none focus:border-neutral-900"
          onChange={(e) => setEnquiryFor(e.target.value)}
        >
          <option value="">Choose Enquity For</option>
          <option value="admission">Admission</option>
          <option value="software">Software</option>
          <option value="device">Device</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid gap-1">
        <label htmlFor="mobileNo" className="text-sm">
          Mobile Number
        </label>
        <input
          required
          type="text"
          name="mobileNo"
          id="mobileNo"
          placeholder="Enter Mobile Number"
          onChange={(e) => setMobileNo(e.target.value)}
          value={mobileNo}
          className="w-full py-1 px-2 border border-neutral-700 outline-none focus:border-neutral-900"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full py-1 px-2 border border-neutral-700 outline-none focus:border-neutral-900"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          rows={6}
          required
          type="text"
          name="message"
          id="message"
          placeholder="Your message.."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full py-1.5 px-2 border border-neutral-700 outline-none focus:border-neutral-900"
        ></textarea>
      </div>

      <button type="submit" className="bg-neutral-900 text-neutral-100 py-1">
        {isLoading ? "Loading.." : "Submit"}
      </button>
    </form>
  );
};

export default EnquiryForm;
