import { toast } from "react-toastify";
import { Formik, Form } from "formik";

import { customFetch } from "../../utils/customFetch";
import CustomInput from "../../components/forms/CustomInput";
import CustomTextArea from "../../components/forms/CustomTextArea";
const Instructor = () => {
  return (
    <div>
      <div class="border border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5">
        <h1 class="text-2xl font-bold xt-white mb-4 text-center">
          Applay to be an Instructor
        </h1>
        <h2 class="text-xl font-bold xt-white mb-4 text-center italic">
          Becom Instructore and share your knowledge with others
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            experience: "",
            spechialization: "",
            description: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              // await axios.post(`${baseUrl}`, values);
              await customFetch.post("instructorApplications", values);
              toast.success("Application Sent Successfully");
            } catch (error) {
              toast.error(error.response.data.message);
            }
            actions.resetForm();
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="pb-5 pt-2">
                <CustomInput
                  name="name"
                  type="text"
                  placeholder="Name"
                  label="Name"
                  required
                />
              </div>
              <div className="pb-5 pt-2">
                <CustomInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  required
                />
              </div>
              <div className="pb-5 pt-2">
                <CustomInput
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  label="Phone"
                  required
                />
              </div>

              <div className="pb-5 pt-2">
                <CustomInput
                  name="experience"
                  type="Number"
                  placeholder="Experience Years"
                  label="Experience"
                  required
                />
              </div>

              <div className="pb-5 pt-2">
                <CustomInput
                  name="specialization"
                  type="text"
                  placeholder="Spechialization"
                  label="Spechialization"
                  required
                />
              </div>
              <div className="pb-5 pt-2">
                <CustomTextArea
                  name="description"
                  placeholder="Description"
                  label="Description"
                  required
                />
              </div>

              <div class="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                <button type="submit" class="w-full p-4">
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

export default Instructor;
