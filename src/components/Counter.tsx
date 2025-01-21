import { useState } from "react";
import styles from "./counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className={styles.button} onClick={() => setCount(count - 1)}>
        decrement
      </button>
      {count}
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};
