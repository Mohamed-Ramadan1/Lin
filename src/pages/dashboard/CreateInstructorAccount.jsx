import { Formik, Form } from "formik";

import { createInstructorsSchema } from "../../schema/createAccountsSchemas.js";
import CustomInput from "../../components/forms/CustomInput";

import { PageIntro } from "../../components";
import { sendPostRequest } from "../../components/common/sendRequests.js";
import { useState } from "react";
const CreateInstructorAccount = () => {
  const [isChanged, setIsChanged] = useState(false);

  return (
    <div className="min-h-[100vh]">
      <div className="p-5 ">
        <PageIntro pageName="Create Instructor Account" />
        <Formik
          initialValues={{
            name: "",
            email: "",
            description: "",
            specialization: "",
            experience: "",
          }}
          validationSchema={createInstructorsSchema}
          onSubmit={(values, actions) => {
            sendPostRequest(
              "instructors",
              values,
              "Instructor Account Created Successfully",
              "Instructor Account Created  Failed",
              setIsChanged,
              actions
            );
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
                {/* description */}
                <CustomInput
                  label="Description"
                  name="description"
                  type="text"
                  placeholder="Enter Instructor description"
                />
                {/* spechilization */}
                <CustomInput
                  label="Specialization"
                  name="specialization"
                  type="text"
                  placeholder="Enter Instructor specialization"
                />
                {/* years of experince */}
                <CustomInput
                  label="Years of Experience"
                  name="experience"
                  type="number"
                  placeholder="Enter Instructor years of experience"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white rounded-md p-2 mt-5"
              >
                Create Instructor
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateInstructorAccount;
