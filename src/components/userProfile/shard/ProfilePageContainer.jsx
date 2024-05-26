const ProfilePageContainer = ({ children }) => {
  return (
    <div className="container w-full max-w-[1400px]  m-auto flex gap-10  justify-start items-start my-3">
      {children}
    </div>
  );
};

export default ProfilePageContainer;
