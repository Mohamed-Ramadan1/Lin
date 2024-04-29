import React from "react";

const RequirementsData = [
    {requir: 'No previous Figma skills are needed.'},
    {requir: 'No previous UX Design/UI Design experience is needed.'},
    {requir: 'You will need a copy of Figma. A free plan is available on the Figma website.'},
    {requir: 'No previous Figma skills are needed.'},
]

const RequirementsCourse = () => {
  return (
    <div>
      <div className="container w-full flex flex-col items-start gap-4">
        <h2 className="text-2xl text-[#222] font-bold">Requirements</h2>

        <div className="info flex flex-col items-start gap-3">
                {RequirementsData.map((item, index) => (
                    <li key={index} className="list-disc">{item.requir}</li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RequirementsCourse;
