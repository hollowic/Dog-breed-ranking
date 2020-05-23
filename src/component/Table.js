import React from "react";
import Card from "./Card";
import Tooltip from "@material-ui/core/Tooltip";
import { Draggable } from "react-beautiful-dnd";
import { getListStyle } from "../helpers/helperFn";
import styles from "./Table.module.scss";

export default React.forwardRef(
  ({ provided, breeds, label, id, snapshot }, ref) => {
    return (
      <Tooltip title="Drag to reorder">
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
      </Tooltip>
    );
  }
);
