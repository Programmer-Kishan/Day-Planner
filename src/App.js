
import { useState } from 'react';

import Container from './Components/UI/Container/Container';
import PlannerHeader from './Components/PlannerDate/PlannerHeader';
import PlannerForm from './Components/PlannerForm/PlannerForm';
import TaskList from './Components/PlannerList/TaskList';

import './App.css';

const INITAL_DATA = [
  {task: "Get Up Early", id: Math.random()},
  {task: "WorkOut", id: Math.random()}
]

function App() {

  const [tasks, setTasks] = useState(INITAL_DATA);
  const [isEmpty, setIsEmpty] = useState(false);

  const addTask = (enteredTask) => {
    if (tasks.length === 0) { setIsEmpty(false); }
    const newTask = {task: enteredTask, id: Math.random()};
    setTasks((prevTask) => (
      [...prevTask, newTask]
    ));
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(curTask => curTask.id !== taskId);
    setTasks(newTasks);
    
    setIsEmpty(newTasks.length === 0 ? true : false);
  }

  const editTask = (taskId, editedTask) => {
    const editedTaskSet = tasks.map(curTask => {
      if(curTask.id === taskId) {
        curTask.task = editedTask;
      }
      return curTask;
    });
    setTasks(editedTaskSet);
  }

  return (
    <Container>
      <PlannerHeader date={new Date()} />
      <PlannerForm onAddTask={addTask}/>
      <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask} 
        onEditTask={editTask}
        isEmpty={isEmpty}
      />
    </Container>
  );
}

export default App;
