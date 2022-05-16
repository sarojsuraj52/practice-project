import classes from "./ErrorModel.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModel = (props) => {
  return (<div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  </div>
  );
};

export default ErrorModel;