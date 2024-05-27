import CourseEnrollmentDetails from "./CourseEnrollmentDetails";
const PaymentDetailsModal = ({ course }) => {
  const { duration, price, paymentModel, _id, videos, financialAid } = course;
  return (
    <>
      <button
        className="btn bg-blue-400 text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Course Enrollment Details
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Course Enrollment information</h3>
          <p className="py-4">
            <CourseEnrollmentDetails
              duration={duration}
              price={price}
              paymentModel={paymentModel}
              courseId={_id}
              videos={videos}
              financialAid={financialAid}
            />
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PaymentDetailsModal;
