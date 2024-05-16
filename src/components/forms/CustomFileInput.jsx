import { useField, useFormikContext } from "formik";

const CustomFileInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const { value, ...fieldWithoutValue } = field;

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFieldValue(props.name, file);
    console.log(field);
  };
  return (
    <div className="inputField w-full flex flex-col gap-[8px] ">
      <label htmlFor={id} className="text-[16px] font-medium text-[#0C1421] m">
        {label}
      </label>
      <input
        {...fieldWithoutValue}
        {...props}
        id={id}
        className="w-full h-[55px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] "
        type="file"
        onChange={changeHandler}
      />
      {meta.error && meta.touched && (
        <p className="text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomFileInput;
