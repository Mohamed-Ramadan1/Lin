const Error = ({ errorMessage }) => {
  return (
    <tr>
      <td colSpan="10" className="text-center p-5 text-3xl">
        {errorMessage}
      </td>
    </tr>
  );
};

export default Error;
