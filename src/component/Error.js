import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 45, 90, 0.64)",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    outline: 0,
    width: "316px",
    height: "120px",
    boxShadow: "rgba(0, 0, 0, .04) 0 0 0 1px, rgba(0, 0, 0, .1) 0 2px 10px",
    position: "relative",
    animation: "$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
  },
  title: {
    fontWeight: "700",
    fontFamily: "'Sen', sans-serif",
  },
  message: {
    fontWeight: "300",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "12px",
  },
  close: {
    color: "#d3dce6",
    width: "55px",
    height: "55px",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#9facbd",
    },
  },
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },

    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },

    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },

    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
}));

export default function Error({ open, handleCloseOnClick }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-label="Error message: Maximum of 19 breeds and
        minimum of 1 per table."
        className={classes.modal}
        open={open}
        onClose={handleCloseOnClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.close}>
              <ClearIcon onClick={handleCloseOnClick} />
            </div>
            <div className={classes.title}>
              <span role="img" aria-label="Puppy emoji">
                🐶
              </span>
              Woof Invalid Action Woof
              <span role="img" aria-label="Puppy emoji">
                🐶
              </span>
            </div>
            <div className={classes.message}>
              "Maximum of 19 breeds and minimum of 1 per table."
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
