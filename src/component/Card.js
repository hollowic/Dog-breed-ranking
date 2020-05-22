import React from "react";
import styles from "./Card.module.scss";
export default React.forwardRef(({ children, rank, provided }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.card}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      aria-label={`Card for ${children}`}
    >
      <div className={styles.rank} aria-label={`Current ranking: ${rank}`}>
        {rank}
      </div>
      <div className={styles.name}>{children}</div>
    </div>
  );
});
