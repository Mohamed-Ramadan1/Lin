import RatingStars from "./RatingStars";

import webdev from "../../../assets/courseImages/webdev.jpg";

const CardCourse = ({ course }) => {
  let {
    title,
    description,
    duration,
    price,
    totalReviews,
    averageRating,
    instructor,
    photo,
    language,
  } = course;

  averageRating = parseInt(averageRating);
  return (
    <div
      href=""
      className="cardCourse p-[10px] flex items-center justify-center gap-[10px] hover:bg-[#f5f5f5] max-md:p-[0px] max-md:justify-start max-md:items-start "
    >
      {/* Image Course  */}
      <div className="imgCourse border-[1px] border-[#e2e2e2] max-w-[250px] rounded-[10px] max-md:max-w-[100px] max-md:min-w-[50px] max-md:rounded-none ">
        <img
          src={webdev}
          alt=""
          className="w-full h-full object-cover rounded-[10px] max-md:w-full max-md:rounded-none"
        />
      </div>

      {/* Details Course */}
      <div className="content flex flex-col items-start gap-[5px]">
        <span className="py-[2px] px-[10px] text-[10px] font-medium text-[#9747FF] bg-[#efe2ff] rounded-[100px]">
          DR : Ahmed
        </span>

        <div className="info w-full flex flex-col items-start gap-[5px]">
          <h2 className="text-2xl font-bold text-[#333] max-md:text-base">
            {title} - {language}
          </h2>
          <p className="text-base font-medium text-[#6e6e6e] max-md:font-light max-md:truncate max-md:max-w-[200px]">
            {description}
          </p>
        </div>

        <div className="rating flex gap-[15px] justify-center items-center max-md:gap-2 ">
          <h3 className="text-[#444444] text-[17px] font-bold max-md:text-[13px]">
            {averageRating}
          </h3>

          <div className="stars flex items-center gap-[4px]">
            <RatingStars rating={averageRating} />
          </div>

          <div>
            <span className="text-[#5e5e5e] max-md:text-[10px]">
              ( {totalReviews} ) reviews
            </span>
          </div>
        </div>

        <div className="price flex gap-[10px] items-end">
          <h1 className="text-[25px] font-bold text-[#222]  max-sm:text-[20px]">
            {price.toFixed(2)}
          </h1>
          <span className="text-base text-[#636363] line-through">155,99</span>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
