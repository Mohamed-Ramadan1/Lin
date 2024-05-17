const UserProfileOperations = () => {
    
  return (
    <div className="container w-full max-w-[1400px]  m-auto flex gap-10 flex-row justify-start items-start">
      <button
        type="button"
        className="w-[182px] h-[48px] bg-[#9747FF] text-[#fff] rounded-[12px] transition ease-in-out hover:bg-[#6F3FF5]"
      >
        Un Activate My Account
      </button>
      <button
        type="button"
        className="w-[182px] h-[48px] bg-[#9747FF] text-[#fff] rounded-[12px] transition ease-in-out hover:bg-[#6F3FF5]"
      >
        Delete My Account
      </button>
    </div>
  );
};

export default UserProfileOperations;
