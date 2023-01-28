
import Container from './Components/UI/Container/Container';
import PlannerHeader from './Components/PlannerDate/PlannerHeader';

import './App.css';


function App() {
  return (
    <Container>
      <PlannerHeader date = {new Date()} />
    </Container>
  );
}

export default App;
