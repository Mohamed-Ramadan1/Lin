const OfferBox = ({ headerText, contentText }) => {
  return (
    <div>
      <h2 className="text-6xl font-bold mb-[15px] text-[#6941C6] max-sm:text-4xl">
        {headerText}
      </h2>
      <span className="text-2xl max-sm:text-base">{contentText}</span>
    </div>
  );
};

export default OfferBox;
