import React from "react";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";
import styles from "./Table.module.scss";

const getListStyle = (snapshot) => {
  // Giving isDraggingOver preference
  if (snapshot.isDraggingOver) {
    return { background: "#FFEBE6" };
  }

  // If it is the home list but not dragging over
  if (snapshot.draggingFromThisWith) {
    return { background: "#E6FCFF" };
  }

  return { background: "#EFCC94" };
};

export default React.forwardRef(
  ({ provided, breeds, label, id, snapshot }, ref) => {
    return (
      <div ref={ref} className={styles.column} style={getListStyle(snapshot)}>
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
                  snapshot={snapshot}
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
  }
);
