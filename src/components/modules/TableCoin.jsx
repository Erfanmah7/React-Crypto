import React from "react";
import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styled from "../modules/tablecoin.module.css";
import { marketChart } from "../../services/CryptoApi";

function TableCoin({ coins, isLoading, currency, setChart, chart }) {
  console.log(coins);
  return (
    <div className={styled.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styled.table}>
          <thead>
            <tr>
              <td>Coin</td>
              <td>Name</td>
              <td>Price</td>
              <td>24h</td>
              <td>Total Volume</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currency={currency}
                chart={chart}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({ currency, setChart, chart, coin }) => {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;
  const chartHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      console.log(json);
      setChart({...json,coin});
    } catch (e) {
      setChart(null);
    }
  };

  return (
    <>
      <tr>
        <td>
          <div className={styled.symbol} onClick={chartHandler}>
            <img src={image} alt={name} />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>

        {currency === "usd" && <td> ${current_price.toLocaleString()}</td>}
        {currency === "eur" && <td> €{current_price.toLocaleString()}</td>}
        {currency === "jpy" && <td> ¥{current_price.toLocaleString()}</td>}

        <td className={price_change > 0 ? styled.success : styled.error}>
          {price_change.toFixed(2)}
        </td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? ChartUp : ChartDown} alt={name} />
        </td>
      </tr>
    </>
  );
};
