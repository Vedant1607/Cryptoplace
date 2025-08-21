const Home = () => {
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

        <form className="p-2 w-4/5 bg-white rounded-[5px] text-[20px] flex justify-between items-center gap-[10px]">
          <input
            type="text"
            placeholder="Search crypto.."
            className="flex-1 text-base outline-none border-none pl-3 text-black placeholder-gray-400"
          />
          <button
            type="submit"
            className="border-none bg-[#7927ff] text-white text-base py-[10px] px-[30px] rounded-[5px] cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="max-w-[800px] m-auto rounded-[15px] bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))]">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-[15px_20px] items-center border-b border-[#3c3c3c]">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
