import React, { useState } from "react";
import SingleEnquiry from "./SingleEnquiry";

const Enquiries = ({ allEnquiries = [], deleteEnquiry }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentId, setCurrentId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedData = [...allEnquiries].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="col-span-2">
      <h2 className="mb-5 font-semibold text-xl">All Enquiries</h2>

      {allEnquiries.length ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-900 text-neutral-100">
                <th className="border border-neutral-700 px-3 py-2 text-left">
                  SN
                </th>

                <th
                  className="border border-neutral-700 px-3 py-2 text-left cursor-pointer select-none flex items-center gap-1"
                  onClick={toggleSort}
                >
                  Name
                  <span className="text-xs">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                </th>

                <th className="border border-neutral-700 px-3 py-2 text-left whitespace-nowrap">
                  Date
                </th>
                <th className="border border-neutral-700 px-3 py-2 text-left whitespace-nowrap">
                  Enquiry For
                </th>

                <th className="border border-neutral-700 px-3 py-2 text-left whitespace-nowrap">
                  Mobile Number
                </th>

                <th className="border border-neutral-700 px-3 py-2 text-left">
                  Email
                </th>

                <th className="border border-neutral-700 px-3 py-2 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((enquiry, index) => (
                <SingleEnquiry
                  key={index}
                  item={enquiry}
                  index={index}
                  handleDelete={() => {
                    setCurrentId(enquiry.id);
                    setIsPopupOpen(true);
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>There is no enquiry</div>
      )}

      {/*Delete Enquiry Pop up */}

      <div
        className={`fixed inset-0 bg-neutral-900/90 flex justify-center items-center h-screen transition-all duration-200 ${
          isPopupOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-sm bg-neutral-50 p-5 text-center rounded">
          <h3 className="text-xl">Do you want to delete?</h3>
          <div className="flex gap-5 justify-between mt-5">
            <button
              onClick={() => {
                setIsPopupOpen(false);
                setCurrentId("");
              }}
              className="bg-neutral-500 text-white px-3 py-1 rounded"
            >
              No
            </button>
            <button
              onClick={() => {
                deleteEnquiry(currentId);
                setIsPopupOpen(false);
                setCurrentId("");
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;
