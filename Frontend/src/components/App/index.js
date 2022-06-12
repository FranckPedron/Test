import List from "../List";
import './style.scss'
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
  const baseUrl = 'http://localhost:3000/api';
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl+'/todos');
      setTasks(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(fetchData,[]);

  const notDoneTasks = tasks.filter(task =>!task.done);
  const doneTasks = tasks.filter(task =>task.done);
  const orderedTasks = [...notDoneTasks, ...doneTasks];

  /**
   * Sets the value of 'done' to the opposite for the selected task
   * @param id task's id
   * Generates a new list of tasks
   */
  const toggleDone = (id) => {
    const newList = (tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done:!task.done,
        };
      }
      return task;
    }));
    setTasks(newList);
  }

  return (
    <div className="app">
      <List tasks={orderedTasks} toggleDone={toggleDone}/>
    </div>
  );
}

export default App;
