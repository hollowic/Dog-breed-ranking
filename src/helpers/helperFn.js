// Reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Moves an item from one list to another list.
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  if (!result[1].length || !result[2].length) {
    return null;
  } else {
    return result;
  }
};

// Picking 20 random breeds
export const pickRandom = (breedsArray) => {
  let n = 20;
  let picked = new Array(n);
  let length = breedsArray.length;
  let taken = new Array(length);
  while (n--) {
    let x = Math.floor(Math.random() * length);
    picked[n] = breedsArray[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }
  return picked;
};

export const getListStyle = (snapshot) => {
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

export const getItemStyle = (isDragging, draggableStyle) => ({
  // change style if dragging
  background: isDragging ? "#E3FCEF" : "#F4F4F4",
  border: isDragging ? "2px rgba(9, 30, 66, 0.71) solid" : "none",
  // styles we need to apply on draggables
  ...draggableStyle,
});
