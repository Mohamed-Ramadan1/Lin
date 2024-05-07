import CustomInput from "../components/forms/CustomInput";
import CustomTextArea from "../components/forms/CustomTextArea";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/instructorApplications";

const Instructor = () => {
  return (
    <div>
      <section class="py-10 my-auto dark:bg-white-900">
        <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div class="lg:w-[98%] md:w-[90%] sm:w-[98%] xs:w-full mx-auto border p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div class="">
              <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white text-center italic">
                Applay to be an Instructor
              </h1>
              <h2 class="text-grey text-xl mb-6 dark:text-white  text-center ">
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
                    await axios.post(`${baseUrl}`, values);
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
                        placeholder="Experience"
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
        </div>
      </section>
    </div>
  );
};

export default Instructor;
