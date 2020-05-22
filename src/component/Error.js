import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 45, 90, 0.64)",
  },
  paper: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "75px 20px 20px",
    outline: 0,
    width: "350px",
    height: "420px",
    boxShadow: "rgba(0, 0, 0, .04) 0 0 0 1px, rgba(0, 0, 0, .1) 0 2px 10px",
    position: "relative",
    "&.error": {
      animation: "$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
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
          <div className={classes.paper}>"Woof Invalid Action Woof"</div>
        </Fade>
      </Modal>
    </div>
  );
}
