import React, { useEffect, useState } from "react";
import { searchData } from "../../services/CryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from "../modules/search.module.css";

function Search({ setCurrency, currency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }
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
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };
    setIsLoading(true);
    getSearchData();
    return () => {
      controller.abort();
    };
  }, [text]);

  return (
    <div className={styles.searchBox}>
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

      {(!!coins.length || isLoading) && (
        <div className={styles.searchResult}>
          {isLoading && (
            <RotatingLines width="50px" strokeColor="#3874ff" strokeWidth="2" />
          )}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
