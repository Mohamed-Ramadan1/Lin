import { PageIntro } from "../../components";

function Settings() {
  return (
    <div className="p-5">
      <PageIntro pageName="Settings" />
      <form action="">
        <input
          type="text"
          placeholder="Website name"
          className="p-3 w-full mt-5"
        />
        <input
          type="text"
          placeholder="descriptions"
          className="p-3 w-full mt-5"
        />
        <input type="text" placeholder="keywords" className="p-3 w-full mt-5" />
        <input type="text" placeholder="author" className="p-3 w-full mt-5" />
        <input type="text" placeholder="email" className="p-3 w-full mt-5" />
        <input type="text" placeholder="phone" className="p-3 w-full mt-5" />
        <input type="text" placeholder="address" className="p-3 w-full mt-5" />
        <input type="text" placeholder="facebook" className="p-3 w-full mt-5" />
        <input type="text" placeholder="twitter" className="p-3 w-full mt-5" />
        <input
          type="text"
          placeholder="instagram"
          className="p-3 w-full mt-5"
        />
        <input type="text" placeholder="linkedin" className="p-3 w-full mt-5" />
        <input type="text" placeholder="youtube" className="p-3 w-full mt-5" />

        <button className="bg-blue-600 text-white p-3 rounded-lg mt-5 w-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;
