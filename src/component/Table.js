import React from "react";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";
import styles from "./Table.module.scss";
export default React.forwardRef(({ provided, breeds, label, id }, ref) => {
  return (
    <div ref={ref} className={styles.column}>
      <div aria-label={label} className={styles.header}>
        <div className={styles.rank}>Rank</div>
        <div className={styles.label}>Breed group {id}</div>
      </div>
      {breeds?.map((el, index) => {
        return (
          <Draggable key={el} draggableId={el} index={index}>
            {(provided, snapshot) => (
              <Card
                rank={index + 1}
                provided={provided}
                ref={provided.innerRef}
              >
                {el}
              </Card>
            )}
          </Draggable>
        );
      })}
      {provided.placeholder}
    </div>
  );
});
