const CourseElement = ({
  course: {
    _id,
    title,

    createdAt,
    updatedAt,
    language,
    totalReviews,
    averageRating,
    paymentModel,
    category,
    duration,
    price,
  },
  index,
}) => {
  const formatDate = new Date(createdAt).toLocaleDateString();
  const lastUPdated = new Date(updatedAt).toLocaleDateString();

  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{title}</td>
        <td className="p-3 text-center">{formatDate}</td>
        <td className="p-3 text-center">{lastUPdated}</td>
        <td className="p-3 text-center">{totalReviews}</td>
        <td className="p-3 text-center">{averageRating}</td>
        <td className="p-3 text-center">{price}</td>
        <td className="p-3 text-center">{category}</td>
        <td className="p-3 text-center">{duration} h</td>
        <td className="p-3 text-center">{paymentModel}</td>
        <td className="p-3 text-center"> {language}</td>

        <td className="p-3">
          <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
          <button className="bg-red-500 text-white p-2 rounded ml-3">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CourseElement;
