import { toast } from "react-toastify";
import { PageIntro } from "../../components";
import { Form } from "react-router-dom";
import { store } from "../../store/store";
import { customFetch } from "../../utils/customFetch";
import DropDown from "../../components/forms/formComponents/DropDown";
import FileInput from "../../components/forms/formComponents/FileInput";
import Input from "../../components/forms/formComponents/Input";
import Button from "../../components/userProfile/shard/Button";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("photo");

  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  const { token } = store.getState().userReducers;
  try {
    const res = await customFetch.post("/courses", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Course created Successfully");

    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
    return null;
  }
};

const CreateCourses = () => {
  return (
    <div className="min-h-[100vh] mb-5">
      <div className="p-5 ">
        <PageIntro pageName="Create Courses" />
        <div>
          <Form method="post" encType="multipart/form-data">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Title"
                name="title"
                type="text"
                required
                placeholder="Enter Title"
              />
              <Input
                label="Description"
                name="description"
                type="text"
                required
                placeholder="Enter Description"
              />
              <Input
                label="Duration"
                name="duration"
                type="text"
                placeholder="Enter Duration in hours "
                required
              />
              <Input
                label="Price"
                name="price"
                type="text"
                required
                placeholder="Enter Price"
              />
              <Input
                label="Discount"
                name="discount"
                type="text"
                required
                placeholder="Enter Discount"
              />

              <DropDown
                label="Payment Model"
                name="paymentModel"
                type="text"
                required
                className="w-full"
                options={[
                  { value: "free", label: "Free" },
                  { value: "paid", label: "Paid" },
                ]}
              />

              <Input
                label="Instructor"
                name="instructor"
                type="text"
                required
                placeholder="Enter Instructor ID"
              />
              <DropDown
                label="Category"
                name="category"
                type="text"
                required
                className="w-full"
                options={[
                  { value: "web development", label: "Web Development" },
                  { value: "web design", label: "Web Design" },
                  { value: "graphic design", label: "Graphic Design" },
                  { value: "mobile development", label: "Mobile Development" },
                  { value: "app development", label: "App Development" },
                  { value: "game development", label: "Game Development" },
                  { value: "ui/ux design", label: "UI/UX Design" },
                  { value: "data science", label: "Data Science" },
                  { value: "data analytics", label: "Data Analytics" },
                  { value: "data visualization", label: "Data Visualization" },
                  { value: "data engineering", label: "Data Engineering" },
                  { value: "marketing", label: "Marketing" },
                  { value: "business", label: "Business" },
                  { value: "finance", label: "Finance" },
                  { value: "accounting", label: "Accounting" },
                  { value: "sales", label: "Sales" },
                  { value: "human resources", label: "Human Resources" },
                  { value: "operations", label: "Operations" },
                  { value: "project management", label: "Project Management" },
                ]}
              />

              <FileInput
                label="Photo"
                name="photo"
                type="text"
                placeholder="Enter Photo"
                required
                className="w-full"
              />

              <Input
                label="Learning Objective"
                name="learningObjective"
                type="text"
                placeholder="Enter Learning Objective"
                required
                className="w-full"
              />

              <DropDown
                label="Skill Level"
                name="skillLevel"
                type="text"
                required
                className="w-full"
                options={[
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "advanced", label: "Advanced" },
                ]}
              />

              <DropDown
                label="Language"
                name="language"
                type="text"
                required
                className="w-full"
                options={[
                  { value: "english", label: "English" },
                  { value: "arabic", label: "Arabic" },
                  { value: "french", label: "French" },
                  { value: "german", label: "German" },
                  { value: "hindi", label: "Hindi" },
                  { value: "spanish", label: "Spanish" },
                  { value: "russian", label: "Russian" },
                ]}
              />
              <Input
                label="Prerequisites"
                name="prerequisites"
                type="text"
                placeholder="Enter Prerequisites"
                required
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Button
                type="submit"
                className="w-full"
                buttonText={"create course"}
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourses;
