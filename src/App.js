
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './Components/Home';
import { Employees } from './Components/Employees';
import { Designations } from './Components/Designations';
import { AddEmployee } from './Components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admin Template</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
              <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designations" element={<Designations />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
