import classes from "./ErrorModel.module.css";
import Button from "./Button";
import Card from "./Card";
import React from "react";
import  ReactDOM  from "react-dom"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return <React.Fragment>
  {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />,document.getElementById('overlay-root'))}
  {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,document.getElementById('modal-root'))}
  </React.Fragment>
};

export default ErrorModel;
