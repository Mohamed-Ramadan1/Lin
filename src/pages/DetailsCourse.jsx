import React from "react";

import ThumbnailCourse from "../components/common/DetailsCourseComponents/ThumbnailCourse";
import DetailsCourseContent from "../components/common/DetailsCourseComponents/DetailsCourseContent";
import Salary from "../components/common/DetailsCourseComponents/Salary";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/courses";

const DetailsCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${baseUrl}/${courseId}`);
        setCourse(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="detailsCourse relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container flex gap-[50px] flex-col items-center justify-center">
        <div className="w-full">
          <ThumbnailCourse
            photo={course.course.photo}
            students={course.enrollments}
            instructor={course.course.instructor[0]}
          />
        </div>

        <div className="flex w-full gap-[50px]">
          <DetailsCourseContent />

          <Salary
            duration={course.course.duration}
            price={course.course.price}
            paymentModel={course.course.paymentModel}
            courseId={course.course._id}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
