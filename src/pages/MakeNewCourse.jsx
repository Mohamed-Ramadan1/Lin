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

const MakeNewCourse = () => {
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CustomInput label="Title" name="title" type="text" />
                <CustomInput
                  label="Description"
                  name="description"
                  type="text"
                />
                <CustomInput label="Price" name="price" type="text" />
                <CustomInput label="Duration" name="duration" type="text" />
                <CustomInput label="Instructor" name="instructor" type="text" />
                <CustomInput
                  label="Prerequisites"
                  name="prerequisites"
                  type="text"
                />
                <CustomInput
                  label="Learning Objectives"
                  name="learningObjectives"
                  type="text"
                />
                <CustomInput label="Language" name="language" type="text" />
                <CustomInput
                  label="Skill Level"
                  name="skillLevel"
                  type="text"
                />
                <CustomInput
                  label="Payment Model"
                  name="paymentModel"
                  type="text"
                />
                <CustomInput label="Photo" name="photo" type="file" />
                <CustomDropdownInput
                  label="Category"
                  name="category"
                  options={[
                    { key: "1", value: "Web Development" },
                    { key: "2", value: "Mobile Development" },
                    { key: "3", value: "Data Science" },
                    { key: "4", value: "Machine Learning" },
                    { key: "5", value: "Artificial Intelligence" },
                  ]}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MakeNewCourse;
