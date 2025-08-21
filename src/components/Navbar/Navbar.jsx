import logo from "@/assets/logo.png";
import arrow_icon from "@/assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-[10%] text-[#ddd] border-b-2 border-[#3c3c3c]">
      <img src={logo} alt="cryptoplace-logo" className="w-[max(12vw,120px)]" />
      <ul className="flex gap-10 list-none">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
      </ul>

      <div className="flex items-center gap-[max(1vw,12px)]">
        <select className="px-2 py-1 rounded-md border-2 border-white bg-transparent text-white">
          <option value="usd" className="bg-[#09005c] text-white">
            USD
          </option>
          <option value="euro" className="bg-[#09005c] text-white">
            EURO
          </option>
          <option value="inr" className="bg-[#09005c] text-white">
            INR
          </option>
        </select>

        <button className="flex items-center gap-2.5 px-6 py-2.5 text-[15px] rounded-3xl font-medium text-[#393939] bg-white cursor-pointer">
          Sign up
          <img src={arrow_icon} alt="arrow" className="w-[13px]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
