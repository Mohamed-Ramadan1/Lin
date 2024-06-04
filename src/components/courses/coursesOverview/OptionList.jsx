import { useState } from "react";
import { useEffect } from "react";
import { customFetch } from "../../../utils/customFetch";
import FilterOptionItem from "./FilterOptionItem";
import FilterOptionsBox from "./FilterOptionsBox";

import {
  categoryOptions,
  levelOptions,
  languageOptions,
} from "./optionsArrays";
const OptionList = ({ titleCheckList, setCourses, clearFilters }) => {
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

  useEffect(() => {
    if (clearFilters) {
      setFormData({
        category: "",
        skillLevel: "",
        paymentModel: "",
        language: "",
      });
    }
  }, [clearFilters]);

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
        {/* Category filter box */}
        <FilterOptionsBox
          label="Category"
          id="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          {categoryOptions.map((category) => (
            <FilterOptionItem
              key={category}
              value={category}
              OptionText={category}
            />
          ))}
        </FilterOptionsBox>
        {/* skill level */}
        <FilterOptionsBox
          label="Skill Level"
          id="skillLevel"
          value={formData.skillLevel}
          onChange={handleInputChange}
        >
          {levelOptions.map((level) => (
            <FilterOptionItem key={level} value={level} OptionText={level} />
          ))}
        </FilterOptionsBox>
        {/*languages options */}
        <FilterOptionsBox
          label="Language"
          id="language"
          value={formData.language}
          onChange={handleInputChange}
        >
          {languageOptions.map((lang) => (
            <FilterOptionItem key={lang} value={lang} OptionText={lang} />
          ))}
        </FilterOptionsBox>
        {/* payment options  */}
        <FilterOptionsBox
          label="Payment Model"
          id="paymentModel"
          value={formData.paymentModel}
          onChange={handleInputChange}
        >
          {["free", "paid"].map((el) => (
            <FilterOptionItem key={el} value={el} OptionText={el} />
          ))}
        </FilterOptionsBox>

        {/* <FilterOptionsBox
          label="Financial Aid "
          id="financialAid"
          value={formData.financialAid}
          onChange={handleInputChange}
        >
          {["available", "not-available"].map((el) => (
            <FilterOptionItem
              key={el}
              value={el === "available" ? true : false}
              OptionText={el}
            />
          ))}
        </FilterOptionsBox> */}
      </div>
    </div>
  );
};

export default OptionList;
