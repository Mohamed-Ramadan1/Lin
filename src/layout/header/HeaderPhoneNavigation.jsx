const HeaderPhoneNavigation = ({ headerText, children }) => {
  return (
    <div className="links w-full flex flex-col items-start gap-3 pb-[20px] border-b-[1px] border-[#e2e2e2]">
      <h2 className=" py-[10px] text-[25px] font-bold text-[#222]">
        {headerText}
      </h2>
      <ul className="flex flex-col items-start gap-[20px]">{children}</ul>
    </div>
  );
};

export default HeaderPhoneNavigation;
