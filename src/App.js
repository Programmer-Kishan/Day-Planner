
import Container from './Components/UI/Container/Container';
import PlannerHeader from './Components/PlannerDate/PlannerHeader';
import PlannerForm from './Components/PlannerForm/PlannerForm';

import './App.css';


function App() {
  return (
    <Container>
      <PlannerHeader date = {new Date()} />
      <PlannerForm />
    </Container>
  );
}

export default App;
