import { Link } from "react-router-dom";
import "./stylebar.css";

const category = [
  { text: "Business" },
  { text: "Development" },
  { text: "IT & Software" },
  { text: "Office Productivity" },
  { text: "Design" },
  { text: "Marketing" },
  { text: "Health & Fitness" },
  { text: "Design" },
  { text: "Marketing" },
  { text: "Health & Fitness" },
];

export default function BottomContent() {
  return (
    <div className="category border-[1px] border-y-[#E9EAF0]">
      <div className="container max-w-[1700px] overflow-x-scroll m-auto gap-10 flex justify-between items-start">
        {category.map((item, index) => (
          <Link key={index} to="/courses">
            <h2 className="p-[20px] transition ease-out hover:bg-[#f5f5f5]">
              {item.text}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
