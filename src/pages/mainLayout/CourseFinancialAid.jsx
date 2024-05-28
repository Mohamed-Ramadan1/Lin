import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import CustomInput from "../../components/forms/CustomInput";
import CustomTextArea from "../../components/forms/CustomTextArea";
import CustomDropdownInput from "../../components/forms/CustomDropdownInput";
import { useSelector } from "react-redux";

const CourseFinancialAid = () => {
  const { token } = useSelector((state) => state.userReducers);
  const { courseId } = useParams();
  const navigate = useNavigate();
  return (
    <div class="border border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5">
      <h1 class="text-2xl font-bold xt-white mb-4 text-center ">
        Apply For Financial Aid
      </h1>
      <Formik
        initialValues={{
          age: "",
          education: "",
          employmentStatus: "",
          applymentReason: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const res = await customFetch.post(
              "financialAidRequests",
              {
                ...values,
                courseId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (res.status === 201) {
              toast.success("Submit Request Successfull");
              navigate(`/courses/${courseId}`);
            }
          } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
            navigate(`/courses/${courseId}`);
          }
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="pb-5 pt-2">
              <CustomInput
                name="age"
                type="Number"
                placeholder="Age"
                label=" Your Age"
                required
              />
            </div>
            <div className="pb-5 pt-2">
              <CustomDropdownInput
                name="education"
                type="text"
                label="Education Level"
                options={["high school", "bachelor", "master", "phd", "other"]}
                required
              />
            </div>
            <div className="pb-5 pt-2">
              {/* enum: ['fullTime', 'partTime', 'unemployed', 'student', 'other'],
               */}
              <CustomDropdownInput
                name="employmentStatus"
                type="text"
                label="Employment Status"
                options={[
                  "fullTime",
                  "partTime",
                  "unemployed",
                  "student",
                  "other",
                ]}
                required
              />
            </div>
            <div className="pb-5 pt-2">
              <CustomTextArea
                name="applymentReason"
                placeholder="Applyment Reason"
                label="Applyment Reason"
                required
              />
            </div>

            <div class="mt-2 flex justify-end">
              <button
                disabled={isSubmitting}
                type="submit"
                class="mt-5 w-full bg-blue-500 text-white px-4 py-2  hover:bg-blue-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 text-center"
              >
                Submit your Application
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseFinancialAid;
