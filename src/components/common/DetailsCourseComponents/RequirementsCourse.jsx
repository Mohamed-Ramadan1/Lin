const RequirementsCourse = ({ prerequisites }) => {
  return (
    <div>
      <div className="container w-full flex flex-col items-start gap-4">
        <h2 className="text-2xl text-[#222] font-bold">Requirements</h2>

        <div className="info flex flex-col items-start gap-3">
          {prerequisites.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequirementsCourse;
