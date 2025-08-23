import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <div className="px-[10px] pb-[100px]">
      <div className="max-w-[600px] my-[80px] mx-auto flex flex-col items-center text-center gap-[30px]">
        <h1 className="text-[clamp(36px,4vw,60px)]">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-[1.5]">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        {/* Hero form with responsive input width */}
        <form onSubmit={searchHandler} className="p-2 w-4/5 bg-white rounded-[5px] text-[20px] flex justify-between items-center gap-[10px]">
          <input
            onChange={inputHandler}
            list="coinList"
            type="text"
            value={input}
            placeholder="Search crypto.."
            required
            className="flex-1 text-base outline-none border-none pl-3 text-black placeholder-gray-400
                       max-[500px]:w-[100px] max-[500px]:min-w-[100px] max-[500px]:flex-none"
          />

          <datalist id="coinList">
            {allCoin.map((item, index) => (<option key={index} value={item.name}/>))}
          </datalist>

          <button
            type="submit"
            className="border-none bg-[#7927ff] text-white text-base py-[10px] px-[30px] rounded-[5px] cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="max-w-[800px] m-auto rounded-[15px] bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))]">
        {/* Table Header - Responsive grid columns */}
        <div className="grid grid-cols-[0.5fr_3fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-[15px_20px] items-center border-b border-[#3c3c3c]
                        text-[13px] md:text-base">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right hidden md:block">Market Cap</p>
        </div>
        {
          displayCoin.slice(0,10).map((item, index) => (
            <Link to={`/coin/${item.id}`} key={index} className="grid grid-cols-[0.5fr_3fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-[15px_20px] items-center border-b border-[#3c3c3c] last:border-none
                                      text-[13px] md:text-base">
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={item.image} 
                  className="w-[25px] md:w-[35px]"
                  alt={item.name}
                />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "text-green-600 text-center items-center":"text-red-600 text-center items-center"}>{Math.round(item.price_change_percentage_24h*100)/100}</p>
              {/* Market Cap - Hidden on medium screens and below */}
              <p className="text-right hidden md:block">{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;