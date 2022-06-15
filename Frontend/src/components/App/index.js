import List from "../List";
import Task from "../Task";
import Spinner from "../Spinner";
import './style.scss'
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import API from '../../api';

function App() {
  const [tasks, setTasks] = useState([]);
  //const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await API.get('/todos');
      setTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la récupération des résultats');
    }
  };

  useEffect(fetchTasks, []);

  const notDoneTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);
  const orderedTasks = [...notDoneTasks, ...doneTasks];

  /**
   * Toggles the value of 'done' for the selected task
   * @param id task's id
   * Generates a new list of tasks
   */
  const toggleDone = (id) => {
    const newList = (tasks.map(task => {
      if (task.id === id) {
       return  {
          ...task,
          done: !task.done,
        };
      }
      return task;
    }));
    setTasks(newList);
  }

  return (
    <div className="app">
      {isLoading && <Spinner/>}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<List tasks={orderedTasks} toggleDone={toggleDone}/>}/>
          <Route path="/tasks/:taskId" element={<Task tasks={tasks} />}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
