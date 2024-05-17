import React from "react";
import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styled from "../modules/tablecoin.module.css";

function TableCoin({ coins, isLoading }) {
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
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <>
      <tr>
        <td>
          <div className={styled.symbol}>
            <img src={image} alt={name} />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
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