const IncludeItem = ({ Icon, data, text }) => {
  return (
    <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
      <Icon className="text-2xl" />
      {data} {text}
    </li>
  );
};

export default IncludeItem;
