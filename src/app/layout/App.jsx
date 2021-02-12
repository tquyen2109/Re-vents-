import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import './style.css';

function App() {
  return (
    <>
      <NavBar/>
      <Container className='main'>
            <EventDashboard/>
      </Container>
  
    </>
  );
}

export default App;
