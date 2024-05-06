import CustomInput from "../components/forms/CustomInput";
import CustomDropdownInput from "../components/forms/CustomDropdownInput";
import CustomFileInput from "../components/forms/CustomFileInput";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCourse } from "../store/courseSlice";
import { courseActions } from "../store/courseSlice";
import { coursesSchema } from "../schema/coursesSchema.js";

function CreateCourses() {
  const dispatch = useDispatch();
  const { isSuccess, error } = useSelector((state) => state.courseReducers);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Created Successfully");
      dispatch(courseActions.cleareSuccessState());
    }

    if (error) {
      toast.error(error);
      dispatch(courseActions.cleareSuccessState());
    }
  }, [isSuccess, dispatch, error]);

  return (
    <div className="min-h-[100vh]">
      <div className="p-5 ">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Create Courses</span>
        </h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            duration: "",
            category: "",
            instructor: "",
            prerequisites: "",
            learningObjectives: "",
            language: "",
            skillLevel: "",
            paymentModel: "",
            // videos: "",
            photo: "",
          }}
          validationSchema={coursesSchema}
          onSubmit={(values, actions) => {
            // console.log(values);
            // dispatch(createCourse(values));
            // console.log(actions);
            // actions.resetForm();
            console.log("cu");
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <CustomInput
                  label="Course Name"
                  name="title"
                  id="courseName"
                  placeholder="Enter Course Name"
                />
                <CustomInput
                  label="Course Description"
                  name="description"
                  id="courseDescription"
                  placeholder="Enter Course Description"
                />
                <CustomInput
                  label="Course Price"
                  name="price"
                  id="coursePrice"
                  placeholder="Enter Course Price"
                />
                <CustomInput
                  label="Course Duration"
                  name="duration"
                  id="courseDuration"
                  placeholder="Enter Course Duration"
                />
                <CustomDropdownInput
                  label="Course Category"
                  name="category"
                  id="courseCategory"
                  options={[
                    { value: "web", label: "Web Development" },
                    { value: "mobile", label: "Mobile Development" },
                    { value: "ml", label: "Machine Learning" },
                    { value: "ai", label: "Artificial Intelligence" },
                  ]}
                />

                {/*instructor input id*/}
                <CustomInput
                  label="Instructor ID"
                  name="instructor"
                  id="instructorId"
                  placeholder="Enter Instructor ID"
                />

                {/* custom input for the prequest of takeing this course */}
                <CustomInput
                  label="Course PreRequest"
                  name="prerequisites"
                  id="preRequest"
                  placeholder="Enter Course PreRequest"
                />

                {/* Learning objective of the course */}
                <CustomInput
                  label="Learning Objective"
                  name="learningObjectives"
                  id="learningObjective"
                  placeholder="Enter Learning Objective"
                />

                {/* Cusotm dropdown menu for language of the course */}
                <CustomDropdownInput
                  label="Course Language"
                  name="language"
                  id="courseLanguage"
                  options={[
                    { value: "english", label: "English" },
                    { value: "spanish", label: "Spanish" },
                    { value: "french", label: "French" },
                    { value: "german", label: "German" },
                  ]}
                />

                <CustomDropdownInput
                  label="Course Level"
                  name="skillLevel"
                  id="courseLevel"
                  options={[
                    { value: "beginner", label: "Beginner" },
                    { value: "intermediate", label: "Intermediate" },
                    { value: "advanced", label: "Advanced" },
                  ]}
                />
                {/*custom drop down for payment model free or paid */}
                <CustomDropdownInput
                  label="Payment Model"
                  name="paymentModel"
                  id="paymentModel"
                  options={[
                    { value: "free", label: "Free" },
                    { value: "paid", label: "Paid" },
                  ]}
                />

                {/* <CustomFileInput
                  label="Course Video"
                  name="videos"
                  id="courseVideo"
                /> */}
                <CustomFileInput
                  label="Course Image"
                  name="photo"
                  id="courseImage"
                />
              </div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className="bg-blue-600 text-white rounded-md p-2 mt-5 mb-7"
              >
                Create Course
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateCourses;
