import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./component/Table";
import Error from "./component/Error";
import exportJSON from "./jsonTemplate";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ShareIcon from "@material-ui/icons/Share";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorder, move, pickRandom } from "./helpers/helperFn";
import "./App.css";

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
        {error && (
          <Error open={error} handleCloseOnClick={handleCloseOnClick} />
        )}
        <Droppable droppableId="1">
          {(provided, snapshot) => (
            <Table
              id="1"
              ref={provided.innerRef}
              breeds={breeds.table1}
              label="Table 1"
              provided={provided}
              snapshot={snapshot}
            />
          )}
        </Droppable>

        <Tooltip title="Export as JSON">
          <a
            download="rankings.json"
            onClick={() => exportJSON(breeds)}
            id="download"
            href={"data:text/json;charset=utf-8," + exportJSON(breeds)}
          >
            <Button style={{ fontWeight: "700" }}>
              <ShareIcon />
              Export
            </Button>
          </a>
        </Tooltip>

        <Droppable droppableId="2">
          {(provided, snapshot) => (
            <Table
              id="2"
              ref={provided.innerRef}
              breeds={breeds.table2}
              label="Table 2"
              provided={provided}
              snapshot={snapshot}
            />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
