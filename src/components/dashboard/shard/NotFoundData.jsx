import React from "react";

const NotFoundData = ({message}) => {
  return (
    <tr>
      <td colSpan="10" className="text-center p-5 text-3xl">
        {message}
      </td>
    </tr>
  );
};

export default NotFoundData;
