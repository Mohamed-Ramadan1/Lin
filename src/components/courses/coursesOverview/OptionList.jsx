import { useState } from "react";
import { useEffect } from "react";
import { customFetch } from "../../../utils/customFetch";
const OptionList = ({ titleCheckList, setCourses }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    skillLevel: "",
    paymentModel: "",
    language: "",
  });

  const toggleList = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const searchParams = new URLSearchParams();
      for (const key in formData) {
        if (formData[key] !== "") {
          searchParams.append(key, formData[key]);
        }
      }
      const queryString = searchParams.toString();

      if (queryString) {
        const result = await customFetch.get(`courses?${queryString}`);
        setCourses(result.data.data.courses);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [formData]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <div className="list flex flex-col gap-[15px]">
      <div
        className="title cursor-pointer py-[10px] px-[5px] border-b-[1px] border-[#eee] flex justify-between items-center"
        onClick={toggleList}
      >
        <h1 className="text-[#222] text-2xl select-none">{titleCheckList}</h1>

        <div className={open ? "icon hidden" : "icon"}>
          <svg
            width="23px"
            height="23px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#212121"
          >
            <path
              d="M6 12H12M18 12H12M12 12V6M12 12V18"
              stroke="#212121"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className={!open ? "icon hidden" : "icon"}>
          <svg
            width="23px"
            height="23px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#212121"
          >
            <path
              d="M6 12H18"
              stroke="#212121"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="list flex flex-col justify-start gap-[15px] transition ease-in-out"
        style={{ maxHeight: open ? "100%" : "0", overflow: "hidden" }}
      >
        <div className="border-bottom">
          <label for="category" class="block mb-1">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="web">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="IT & Software">IT & Software</option>

            <option value="Business">Business</option>
            <option vlaue="languages"></option>
          </select>
        </div>

        <div className="border-bottom">
          <label for="skillLevel" class="block mb-1">
            Skill Level
          </label>
          <select
            id="skillLevel"
            value={formData.title}
            onChange={handleInputChange}
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="border-bottom">
          <label for="paymentModel" class="block mb-1">
            Payment Model
          </label>
          <select
            id="paymentModel"
            value={formData.price}
            onChange={handleInputChange}
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All </option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        <div className="border-bottom">
          <label for="language" class="block mb-1">
            Langue
          </label>
          <select
            id="language"
            value={formData.language}
            onChange={handleInputChange}
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Languages</option>
            <option value="english">English</option>
            <option value="france">French</option>
            <option value="spain">Spanish</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OptionList;
