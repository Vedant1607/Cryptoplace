import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "@/context/CoinContext";
import LineChart from "../components/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );

      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`API call failed: ${res.status}, body: ${errorBody}`);
      }

      const data = await res.json();
      if (data) {
        setCoinData(data);
      } else {
        setCoinData();
        console.error("API returned non-array data:", data);
      }
    } catch (err) {
      console.error("API call failed: ", err);
    }
  };

  const fetchHistoricalData = async () => {
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      )
      if(!res.ok) {
        const errorBody = res.text();
        throw new Error(`API call failed: ${res.status}, body: ${errorBody}`)
      }
      const data = await res.json();
      if (data) {
        setHistoricalData(data);
      } else {
        setHistoricalData();
        console.error(`API returned non-array data: ${data}`);
      }
    } catch (err) {
      console.log(`API call failed:${err}`)
    }
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (coinData && historicalData) {
    return (
      <div className="px-5">
        <div className="flex flex-col items-center gap-5 mt-[100px] mx-auto mb-[50px]">
          <img src={coinData.image.large} alt={coinData.name} className="max-w-[100px]"/>
          <p><b className="text-[44px] font-medium">{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="max-w-[600px] h-[250px] m-auto">
          <LineChart historicalData={historicalData}/>
        </div>
        <div className="max-w-[600px] my-[50px] mx-auto flex flex-col">
          <ul className="flex justify-between py-[10px] list-none border-b border-[#5f5d5f]">
            <li>Crypto Market Rank</li>
            <li className="last:font-light">{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex justify-between py-[10px] list-none border-b border-[#5f5d5f]">
            <li>Current Price</li>
            <li className="last:font-light">{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-[10px] list-none border-b border-[#5f5d5f]">
            <li>Market Cap</li>
            <li className="last:font-light">{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()} {}</li>
          </ul>
          <ul className="flex justify-between py-[10px] list-none border-b border-[#5f5d5f]">
            <li>24 Hour High</li>
            <li className="last:font-light">{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()} {}</li>
          </ul>
          <ul className="flex justify-between py-[10px] list-none border-b border-[#5f5d5f]">
            <li>24 Hour Low</li>
            <li className="last:font-light">{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()} {}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid place-self-center min-h-[80vh]">
        <div className="w-[65px] h-[65px] place-self-center border-[5px] border-[#bdbdbd] border-t-[#4500c6] rounded-full animate-spin"></div>
      </div>
    );
  }
};

export default Coin;