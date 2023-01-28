
import Container from './Components/UI/Container/Container';
import PlannerHeader from './Components/PlannerDate/PlannerHeader';
import PlannerForm from './Components/PlannerForm/PlannerForm';
import TaskList from './Components/PlannerList/TaskList';

import './App.css';


function App() {
  return (
    <Container>
      <PlannerHeader date = {new Date()} />
      <PlannerForm />
      <TaskList />
    </Container>
  );
}

export default App;
