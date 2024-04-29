const InfoBox = ({ headerText, descriptionText }) => {
  return (
    <div className="flex flex-col gap-[10px] items-start">
      <h2 className="text-4xl text-[#fff] font-bold ">{headerText}</h2>
      <span className="text-xl text-slate-200">{descriptionText}</span>
    </div>
  );
};

export default InfoBox;
