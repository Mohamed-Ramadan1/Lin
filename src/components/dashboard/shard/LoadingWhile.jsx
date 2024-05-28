import LoadingSpinner from "../../userProfile/shard/LoadingSpinner";
const LoadingWhile = () => {
  return (
    <tr>
      <td colSpan="10" className="text-center p-5 text-3xl">
        <LoadingSpinner />
      </td>
    </tr>
  );
};

export default LoadingWhile;
