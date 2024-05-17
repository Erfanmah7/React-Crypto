import React, { useState } from "react";
import styles from "../modules/pagination.module.css";

function Pagination({ page, setPage }) {
  const perviousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={perviousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        Pervious
      </button>
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? styles.selected : null}>9</p>
      <p className={page === 10 ? styles.selected : null}>10</p>
      <button
        onClick={nextHandler}
        className={page === 10 ? styles.disabled : null}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
