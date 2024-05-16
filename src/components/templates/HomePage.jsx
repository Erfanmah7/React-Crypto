import React, { useEffect, useState } from "react";
import { getcoinlist } from "../../services/CryptoApi";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getcoinlist());
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
