import InfoItem from "./InfoItem";

const OrderDetails = ({ course }) => {
  return (
    <div className="w-[100%] sm:w-[50%] ml-5 ">
      <div className="mb-6">
        <h3 className="text-center font-bold text-xl italic">Order details</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <InfoItem infoTitle="Course Name" infoDetails={course?.title} />
          <InfoItem
            infoTitle="Course Price"
            infoDetails={`${course?.price} $`}
          />
          <InfoItem
            infoTitle="Course Duration"
            infoDetails={`${course?.duration} h`}
          />
          <InfoItem
            infoTitle="Course Category"
            infoDetails={course?.category}
          />
          <InfoItem
            infoTitle="Course Language"
            infoDetails={course?.language}
          />
          <InfoItem infoTitle="Course Level" infoDetails={course?.skillLevel} />
          <InfoItem
            infoTitle="Course Rating"
            infoDetails={course?.averageRating}
          />
        </div>
        <div>
          {/* price ,taxes ,descount , total payment-amount  */}
          <div className="flex flex-col justify-center">
            <InfoItem infoTitle="Price" infoDetails={`${course?.price} $`} />
            <InfoItem infoTitle="Taxes" infoDetails={`0 $`} />
            <InfoItem
              infoTitle="Discount"
              infoDetails={`${course?.discount} $`}
            />
            <InfoItem
              infoTitle="Total Payment Amount"
              infoDetails={`${(course
                ? course.price - course.discount
                : 0
              ).toFixed(2)} $`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
