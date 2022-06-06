import './App.css';
import React from "react";
import List from './components/list';
import MDetails from './components/moreDetails';



function App() {
const [counter, setCounter] = React.useState(21);

const IncrementHandler=(value)=>{
  setCounter(value+counter);
};

  return (
    <div className="App-header">
      <div className="profile App Body">
        <img src="/logo192.png" alt="" />
        <h1>Name: Aalesh Patil</h1>
        <h2>Age: {counter}</h2>
        <div className="ageToggle">
          <button onClick={()=>IncrementHandler(+1)}>Increase Age</button>
          <button onClick={()=>IncrementHandler(-1)}>Decrease Age</button>
        </div>
        <MDetails/>
      </div>
      <div className="todoList App">
        <h1 >TODO LIST</h1>
        <ul type="none">
         <List/>
        </ul>
      </div>
    </div>
  );
}

export default App;
