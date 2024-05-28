import WishlistComponent from "../../userProfile/wishlist/WishlistComponent";
import { Link } from "react-router-dom";

const PaymentDetailsInfo = ({
  paymentModel,
  redirectPath,
  price,
  courseId,
  financialAid,
}) => {
  return (
    <div className="top-salary w-full relative flex justify-between items-start">
      <div>
        {paymentModel === "free" ? (
          <h2 className="text-3xl font-bold">Free Course</h2>
        ) : (
          <>
            <h2 className="text-3xl font-bold">E£{price}</h2>
            {financialAid && paymentModel === "paid" && (
              <div className="flex gap-3 items-center">
                <Link
                  to={redirectPath}
                  className="font-bold underline text-blue-600 hover:text-blue-800"
                >
                  Apply For Financial aid
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      <div className="relative">
        <WishlistComponent courseId={courseId} />
      </div>
    </div>
  );
};
export default PaymentDetailsInfo;
