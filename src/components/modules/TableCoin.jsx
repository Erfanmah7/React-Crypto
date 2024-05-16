import React from "react";
import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";

function TableCoin({ coins }) {
  console.log(coins);
  return (
    <div>
      <table>
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
            <tr key={coin.id}>
              <td>
                <div>
                  <img src={coin.image} alt={coin.name} />
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{coin.name}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}</td>
              <td>{coin.total_volume.toLocaleString()}</td>
              <td>
                <img
                  src={
                    coin.price_change_percentage_24h > 0 ? ChartUp : ChartDown
                  }
                  alt={coin.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoin;
