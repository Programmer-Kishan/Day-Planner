
import { useState } from 'react';

import Container from './Components/UI/Container/Container';
import PlannerHeader from './Components/PlannerDate/PlannerHeader';
import PlannerForm from './Components/PlannerForm/PlannerForm';
import TaskList from './Components/PlannerList/TaskList';

import './App.css';

const INITAL_DATA = [
  {task: "Get Up Early", id: 1},
  {task: "WorkOut", id: 2}
]

function App() {

  const [tasks, setTasks] = useState(INITAL_DATA);

  const addTask = (enteredTask) => {
    const newTask = {task: enteredTask, id: tasks.length+1};
    setTasks((prevTask) => (
      [...prevTask, newTask]
    ));
  }

  return (
    <Container>
      <PlannerHeader date = {new Date()} />
      <PlannerForm onAddTask = {addTask}/>
      <TaskList tasks = {tasks}/>
    </Container>
  );
}

export default App;
