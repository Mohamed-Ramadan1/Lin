import { sendPatchRequest, sendDeleteRequest } from "../common/sendRequests";
import ActionButton from "../userProfile/blogs/ActionButton";

const BlogItem = ({ blog, userId, setIsChanged }) => {
  const { _id, category, content, createdAt, title, createdBy, visibility } =
    blog;
  const myBlog = userId === createdBy._id;
  const formattedDate = new Date(createdAt).toDateString();

  return (
    <div class="px-[0vh] md:px-[19vh] my-5">
      <div class="border p-3 bg-gray-100 md:rounded-lg rounded-0">
        <h3 class="text-2xl font-bold mt-4 mb-4 text-center italic">{title}</h3>
        <div class="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex flex-col">
            <span className="mb-2">Category : {category}</span>
            <span>Visibility : {visibility}</span>
          </div>
          <span>Created at : {formattedDate}</span>
        </div>
        <p class="text-gray-700 mb-4 ">{content}</p>

        {myBlog && (
          <div class="flex justify-end gap-3">
            <ActionButton
              btnType="danger"
              onClick={() => {
                sendDeleteRequest(
                  "Are you sure you want to delete this post?",
                  `blogs/${_id}`,
                  "Blog post deleted successfully",
                  "Failed to delete blog post",
                  setIsChanged
                );
              }}
              btnText="Delete"
            />
            {myBlog && visibility === "public" && (
              <ActionButton
                btnType="mainBlue"
                onClick={() => {
                  sendPatchRequest(
                    `blogs/${_id}`,
                    {
                      visibility: "private",
                    },
                    "Are you sure you want to make  this post private no one else you will be able to see the post?",
                    " post visibility converted to private  successfully",
                    "Failed to Make  blog post private",
                    setIsChanged
                  );
                }}
                btnText="Make It Private"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
