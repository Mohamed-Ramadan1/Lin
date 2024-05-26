const FilterOptionsBox = ({ label, children, id, value, onChange }) => {
  return (
    <div className="border-bottom" >
      <label for={id} class="block mb-3 text-black font-bold">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          Select the {label.toLowerCase()} option
        </option>
        {children}
      </select>
    </div>
  );
};

export default FilterOptionsBox;
