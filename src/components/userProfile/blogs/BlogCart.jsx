import ActionBUtton from "./ActionButton";
import { sendDeleteRequest, sendPatchRequest } from "../../common/sendRequests";
const BlogCart = ({ blog, setIsChanged }) => {
  const { _id, title, content, category, createdAt, published, visibility } =
    blog;
  const formattedDate = new Date(createdAt).toDateString();
  const isPublished = published ? "published" : "Not published";

  return (
    <div className="card w-full  mb-5 bg-gray-100 text-black">
      <div className="card-body  ">
        <div className="flex justify-center mb-5">
          <h2 className="card-title break-words max-h-40 overflow-y-auto">
            {title}
          </h2>
        </div>
        <div className="w-full flex justify-between ">
          <div>
            <p className="card-category">
              <span className="font-bold ">Category : </span>
              {category}
            </p>
            <p className="card-category">
              <span className="font-bold ">Visibility : </span>
              {visibility}
            </p>
          </div>
          <div>
            <p className="card-category">
              <span className="font-bold ">Created-At : </span>
              {formattedDate}
            </p>
            <p className="card-category">
              <span className="font-bold ">Publish-Stats : </span>
              {isPublished}
            </p>
          </div>
        </div>
        <div className="h-[200px]">
          <div className="font-bold italic text-center mt-3 mb-3 text-xl">
            <p>Content</p>
          </div>
          <p className="break-words max-h-40 overflow-y-auto">{content}</p>
        </div>
        <div className="card-actions justify-end mt-5">
          <ActionBUtton
            btnType="danger"
            onClick={() => {
              sendDeleteRequest(
                "Are you sure you want to delete this post?",
                `blogs/${_id}`,
                "Blog deleted successfully",
                "Failed to delete blog post",
                setIsChanged
              );
            }}
            btnText="Delete Blog"
          />
          {visibility === "private" && (
            <ActionBUtton
              btnType="mainBlue"
              onClick={() => {
                sendPatchRequest(
                  `blogs/${_id}`,
                  {
                    visibility: "public",
                  },
                  "Are you sure you want to make  this post private no one else you will be able to see the post?",
                  " post visibility converted to Public  successfully",
                  "Failed to make  blog post public",
                  setIsChanged
                );
              }}
              btnText="Make It Public"
            />
          )}
          {visibility === "public" && (
            <ActionBUtton
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
      </div>
    </div>
  );
};

export default BlogCart;
