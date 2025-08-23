import logo from "@/assets/logo.png";
import arrow_icon from "@/assets/arrow_icon.png";
import { useContext, useState } from "react";
import { CoinContext } from "@/context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-5 px-[10%] text-[#ddd] border-b-2 border-[#3c3c3c] 
                      lg:px-[8%] md:px-[6%] sm:px-[5%]">
        <Link to={'/'}>
          <img
            src={logo}
            alt="cryptoplace-logo"
            className="w-[max(12vw,120px)] md:w-[max(15vw,100px)] sm:w-[max(20vw,80px)]"
          />
        </Link>

        {/* Desktop Menu - Always visible on lg and up */}
        <ul className="hidden lg:flex gap-10 list-none transition-all duration-300 ease-in-out">
          <Link to={'/'}>
            <li className="cursor-pointer hover:text-white transition-colors duration-200">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">Features</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">Pricing</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200">Blog</li>
        </ul>

        {/* Tablet Menu - Compact horizontal menu on md screens */}
        <ul className="hidden md:flex lg:hidden gap-4 list-none transition-all duration-300 ease-in-out">
          <Link to={'/'}>
            <li className="cursor-pointer hover:text-white transition-colors duration-200 text-sm">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 text-sm">Features</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 text-sm">Pricing</li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 text-sm">Blog</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-[max(1vw,12px)]">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 
                       transition-all duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>

          <select
            onChange={currencyHandler}
            className="px-2 py-1 rounded-md border-2 border-white bg-transparent text-white
                       text-sm md:text-xs transition-all duration-200 hover:border-gray-300"
          >
            <option value="usd" className="bg-[#09005c] text-white">
              USD
            </option>
            <option value="eur" className="bg-[#09005c] text-white">
              EURO
            </option>
            <option value="inr" className="bg-[#09005c] text-white">
              INR
            </option>
          </select>

          <button className="flex items-center gap-2 px-6 py-2 text-[15px] rounded-3xl font-medium text-[#393939] bg-white cursor-pointer
                             transition-all duration-200 hover:bg-gray-100 hover:shadow-md
                             lg:gap-2 lg:px-6 lg:py-2 lg:text-[15px]
                             md:gap-2 md:px-4 md:py-2 md:text-[14px]
                             sm:gap-1 sm:px-3 sm:py-2 sm:text-[12px]">
            <span className="hidden sm:inline">Sign up</span>
            <span className="sm:hidden">Up</span>
            <img
              src={arrow_icon}
              alt="arrow"
              className="w-[13px] md:w-3 sm:w-2.5 transition-transform duration-200 hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-b-2 border-[#3c3c3c] z-50
                       transition-all duration-300 ease-in-out transform origin-top
                       ${isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
        <ul className="flex flex-col px-[10%] py-4 space-y-3">
          <Link to={'/'} onClick={toggleMenu}>
            <li className="cursor-pointer hover:text-white transition-colors duration-200 py-2 border-b border-[#3c3c3c]">
              Home
            </li>
          </Link>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 py-2 border-b border-[#3c3c3c]">
            Features
          </li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 py-2 border-b border-[#3c3c3c]">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-white transition-colors duration-200 py-2">
            Blog
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;