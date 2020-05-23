import React from "react";
import styles from "./Card.module.scss";

const getItemStyle = (isDragging, draggableStyle) => ({
  // change style if dragging
  background: isDragging ? "#E3FCEF" : "#F4F4F4",
  border: isDragging ? "2px rgba(9, 30, 66, 0.71) solid" : "none",

  // styles we need to apply on draggables
  ...draggableStyle,
});

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
