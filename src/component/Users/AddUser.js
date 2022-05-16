import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  // const enteredNameRef = useRef()
  // const enteredAgeRef = useRef()

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollege, setEnteredCollege] = useState("");

  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredNameRef.current.value)
    // console.log(enteredAgeRef.current.value)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0) {
      setError({
        title: "Invalid inputs!",
        message: "please enter Name and Age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age > 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge,enteredCollege);
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredCollege("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            type="text"
            id="usernadme"
            onChange={usernameChangeHandler}
            // ref={enteredNameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            type="number"
            id="age"
            onChange={ageChangeHandler}
            // ref={enteredAgeRef}
          />
          <label htmlFor="college">College</label>
          <input
            value={enteredCollege}
            type="text"
            id="college"
            onChange={collegeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
