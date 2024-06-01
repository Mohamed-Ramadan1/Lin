import { Formik, Form } from "formik";

import { blogSchema } from "../../schema/blogSchemas";

import CustomInput from "../forms/CustomInput";
import CustomDropdownInput from "../forms/CustomDropdownInput";
import CustomTextArea from "../forms/CustomTextArea";
import { sendPostRequest } from "../common/sendRequests";

const BlogForm = ({ setIsChanged }) => {
  return (
    <div class="border border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5">
      <h2 class="text-3xl mb-2 font-bold italic   text-center">Add Post</h2>
      <Formik
        initialValues={{
          title: "",
          content: "",
          category: "",
        }}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          sendPostRequest(
            "blogs",
            values,
            "Blog Posted Successfully",
            "Failed to Post Blog",
            setIsChanged,
            actions
          );
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-4">
              <CustomInput label="Title" id="title" name="title" type="text" />
            </div>

            <div className="mt-4">
              <CustomTextArea
                label="Content"
                id="content"
                name="content"
                type="text"
              />
            </div>

            <div className="mt-4">
              <CustomDropdownInput
                label="Category"
                id="category"
                name="category"
                options={[
                  { value: "tech", label: "Tech" },
                  { value: "lifestyle", label: "Lifestyle" },
                  { value: "health", label: "Health" },
                  { value: "languages", label: "Languages" },
                  { value: "training", label: "Training" },
                ]}
              />
            </div>
            <div class="flex justify-end mt-5 w-full">
              <button
                disabled={isSubmitting}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 p-10 focus:outline-none focus:shadow-outline rounded-[12px] w-full"
                type="submit"
              >
                Blog Now
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
