import React, { useState } from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState(' ')
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  const resetField = () => {
    setToDo(" ")
  }

  const deleteTask = (index) => {
    if (window.confirm("Do you want to delete?")) {
      const test = [...toDos];
      test.splice(index, 1);

      setToDos(test)
    }
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName}  🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { if (toDo === " ") { console.log('errpr') } else { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }], resetField()) } }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj, index) => {
            return (<div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj)
                  setToDos(toDos.filter((obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  })))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => { deleteTask(index) }}></i>
              </div>
            </div>)
          })

        }
      </div>
      <div>
        <h3 className='completed'>Completed tasks lists here</h3>
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (<div ><input className='tasksCompleted' defaultValue={obj.text} /></div>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
