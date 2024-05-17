import React, { useEffect, useState } from "react";
import { searchData } from "../../services/CryptoApi";

function Search({ setCurrency, currency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!text) return;
    const controller = new AbortController();
    const getSearchData = async () => {
      try {
        const res = await fetch(searchData(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json.coins);
        if (json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };

    getSearchData();
    return () => {
      controller.abort();
    };
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
