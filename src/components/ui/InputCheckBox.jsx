
import "./InputCheckBox.css";

const InputCheckBox = ({ textLabel }) => {
  return (
    <div className="checkboxInput w-full flex flex-row-reverse justify-end items-center gap-[10px]">
      <label htmlFor="" className="select-none">
        {textLabel}
      </label>
      <input type="checkbox" id="" className="ui-checkbox" />
    </div>
  );
};

export default InputCheckBox;
