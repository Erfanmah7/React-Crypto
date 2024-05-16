import React, { useEffect, useState } from "react";
import { getcoinlist } from "../../services/CryptoApi";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getcoinlist());
      const json = await res.json();
      setCoins(json);
    };

    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
