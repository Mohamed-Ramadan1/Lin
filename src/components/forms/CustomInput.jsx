import { useField } from "formik";

const CustomInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="inputField w-full flex flex-col gap-[8px] ">

      <label htmlFor={id} className='text-[16px] font-medium text-[#0C1421]'>{label}</label>
      <input
        {...field}
        {...props}
        className='w-full h-[48px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] '
      />
      {meta.error &&
        meta.touched && ( // corrected passwordConfirm
          <p className="text-red-500">{meta.error}</p>
        )}
    </div>
  );
};

export default CustomInput;
