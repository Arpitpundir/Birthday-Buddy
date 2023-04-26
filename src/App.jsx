import UserData from "./data";
import Person from "./component/Person/Person";
import { useState } from "react";
const App = () => {
  console.log('----->Rendering');
  const [users, setUsers] = useState(UserData);
  const persons = users.map(curr => <Person {...curr}/>)
  const removeAllUser = () => {
    setUsers([]);
  }
  const setAllUser = () => {
    setUsers(UserData);
  }
  const handleClearAll = () =>  {
    removeAllUser();
  }
  const handleSetAll = () => {
    setAllUser();
  }
  return (
    <div className="container">
      <h3>{users.length} Birtdays Today</h3>
      {persons}
      <button className="btn btn-large" onClick = {users.length?handleClearAll: handleSetAll}>{users.length?'Clear All':'Set All'}</button>
    </div>
  );
};
export default App;
