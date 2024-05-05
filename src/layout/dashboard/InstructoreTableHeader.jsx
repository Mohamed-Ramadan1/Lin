import React from "react";

const InstructoreTableHeader = () => {
  return (
    <thead>
      <tr className="border-b">
        <td className="p-3 text-center">Index</td>
        <td className="p-3 text-center">Instructor Name</td>
        <td className="p-3 text-center">Instructor Email</td>
        <td className="p-3 text-center">Instructor Specialization</td>
        <td className="p-3 text-center">Rating</td>
        <td className="p-3 text-center">Joining At</td>
        <td className="p-3 text-center">Experiences Years</td>
        <td className="p-3 text-center">Status</td>
        <td className="p-3 text-center">Options</td>
      </tr>
    </thead>
  );
};

export default InstructoreTableHeader;
