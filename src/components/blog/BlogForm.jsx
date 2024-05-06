import { Formik, Form } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomInput from "../forms/CustomInput";
import CustomDropdownInput from "../forms/CustomDropdownInput";
import CustomTextArea from "../forms/CustomTextArea";
import { blogSchema } from "../../schema/blogSchemas";

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/blog";

const BlogForm = () => {
  const { token } = useSelector((state) => state.userReducers);
  const createNewBlogPost = async (values) => {
    try {
      await axios.post(baseUrl, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Blog Posted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Post Blog");
    }
  };

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
          createNewBlogPost(values);
          actions.resetForm();
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
            <div class="flex justify-end mt-5 ">
              <button
                disabled={isSubmitting}
                class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 p-5 focus:outline-none focus:shadow-outline rounded-[12px]"
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
