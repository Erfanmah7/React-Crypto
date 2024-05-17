import React, { useEffect, useState } from "react";
import { getcoinlist } from "../../services/CryptoApi";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Currency from "../modules/Currency";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(getcoinlist(page, currency));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    getData();
  }, [page, currency]);

  return (
    <div>
      <Currency currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
