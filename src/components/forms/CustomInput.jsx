import { useField } from "formik";

const CustomInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field", field);
  // console.log("meta", meta);
  // console.log("helpers", helpers);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...field}
        {...props}
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
      />
      {meta.error &&
        meta.touched && ( // corrected passwordConfirm
          <p className="text-red-500">{meta.error}</p>
        )}
    </>
  );
};

export default CustomInput;
