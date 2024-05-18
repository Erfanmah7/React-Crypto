import React from "react";
import styles from "../modules/chart.module.css";

function Chart({ setChart, chart }) {
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
