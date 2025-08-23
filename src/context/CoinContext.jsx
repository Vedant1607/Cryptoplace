import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

function CoinContextProvider(props) {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      if (!res.ok) {
        throw new Error("API call failed: " + res.status);
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setAllCoin(data);
      } else {
        setAllCoin([]);
        console.error("API returned non-array data:", data);
        console.log("API returned non-array data:", data);
      }

    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
}

export default CoinContextProvider;