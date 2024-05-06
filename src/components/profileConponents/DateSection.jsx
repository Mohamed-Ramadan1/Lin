const DateSection = () => {
  const fullYear = new Date().getFullYear();
  const month = new Date().getMonth();

  return (
    <div className="basis-1/3 rounded-[5px] p-[50px] bg-[#F6F6F6] text-center h-[30vh]">
      <h2 className="font-bold italic">{` ${month + 1} / ${fullYear} `}</h2>

      <p class="font-bold tracking-tight mt-5 italic">
        " You are braver than you believe, stronger than you seem, and smarter
        than you think." - A.A. Milne. Take a deep breath, break down your tasks
        into smaller chunks, and remember you've got this! 🌟💪🏽🌟 "
      </p>
    </div>
  );
};
// 21 June 2021
//03:21
export default DateSection;
