import React from "react";
import { getItemStyle } from "../helpers/helperFn";
import styles from "./Card.module.scss";

export default React.forwardRef(
  ({ children, rank, provided, snapshot }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.card}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        aria-label={`Card for ${children}`}
      >
        <div className={styles.rank} aria-label={`Current ranking: ${rank}`}>
          {rank}
        </div>
        <div className={styles.name}>{children}</div>
      </div>
    );
  }
);
