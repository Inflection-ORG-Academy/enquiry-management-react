import React, { useState } from "react";

const SingleEnquiry = ({ item = {}, index, handleDelete }) => {
  const [isMsgShow, setIsMsgShow] = useState(false);
  return (
    <>
      <tr
        key={item.id}
        className="bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition"
      >
        <td className="border border-neutral-600 px-3 py-2">{index + 1}</td>

        <td className="border border-neutral-600 px-3 py-2 font-medium whitespace-nowrap">
          {item.name}
        </td>

        <td className="border border-neutral-600 px-3 py-2 whitespace-nowrap">
          {new Date(item.createdAt)
            .toLocaleDateString("en-IN", {
              timeZone: "Asia/Kolkata",
            })
            .replaceAll("/", "-")}
        </td>
        <td className="border border-neutral-600 px-3 py-2 capitalize">
          {item.enquiryFor}
        </td>

        <td className="border border-neutral-600 px-3 py-2">{item.mobileNo}</td>

        <td className="border border-neutral-600 px-3 py-2">{item.email}</td>

        <td className="border border-neutral-600 px-3 py-2 text-center flex gap-2">
          <button
            onClick={() => {
              handleDelete();
            }}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-xs"
          >
            Delete
          </button>
          <button
            onClick={() => setIsMsgShow(!isMsgShow)}
            className="text-xs whitespace-nowrap"
          >
            See Message
          </button>
        </td>
      </tr>
      {isMsgShow && (
        <tr>
          <td colSpan={7} className="px-3 py-2">
            {item.message}
          </td>
        </tr>
      )}
    </>
  );
};

export default SingleEnquiry;
