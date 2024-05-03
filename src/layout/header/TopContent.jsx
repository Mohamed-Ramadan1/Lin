import TopContentNavigationLinks from "./TopContentNavigationLinks";

const TopContent = () => {
  return (
    <div className="topContent relative p-[15px] bg-[#1D2026]">
      <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
        <div className="links">
          <TopContentNavigationLinks />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
