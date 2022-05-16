import React,{useState} from 'react';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';


function App() {
  const [usersList,setUsersList] = useState([])

  const addUserHandler = (uName,uAge, uCollege) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList,{name:uName, age:uAge,college:uCollege, id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
