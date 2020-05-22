import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./component/Table";
import Error from "./component/Error";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";

// Reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
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
const pickRandom = (breedsArray) => {
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

function App() {
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      const pickedBreeds = pickRandom(Object.keys(res.data.message));
      setBreeds({
        table1: pickedBreeds.slice(10),
        table2: pickedBreeds.slice(0, 10),
      });
    } catch (err) {
      console.log("Whoops there was an error getting our breed data!", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [breeds, setBreeds] = useState({});
  const [error, setError] = useState(false);

  const handleCloseOnClick = () => {
    setError(false);
  };

  // Map id to table
  const getList = (id) => {
    if (id === "1") {
      return breeds.table1;
    }
    if (id === "2") {
      return breeds.table2;
    }
  };

  // Drag function
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the tables
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      setBreeds((prevState) => {
        if (source.droppableId === "1") {
          return { table1: items, table2: prevState.table2 };
        } else {
          return { table1: prevState.table1, table2: items };
        }
      });
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      if (!result) {
        setError(true);
        return;
      }

      setBreeds({
        table1: result[1],
        table2: result[2],
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div id="app">
        <Error open={error} handleCloseOnClick={handleCloseOnClick} />
        <Droppable droppableId="1">
          {(provided, snapshot) => (
            <Table
              id="1"
              ref={provided.innerRef}
              breeds={breeds.table1}
              label="Table 1"
              provided={provided}
            />
          )}
        </Droppable>
        <Droppable droppableId="2">
          {(provided, snapshot) => (
            <Table
              id="2"
              ref={provided.innerRef}
              breeds={breeds.table2}
              label="Table 2"
              provided={provided}
            />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
