// Importing bootstrap stylesheet.
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing react-bootstrap components.
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './components/CartWidget/CartWidget';

// Importing project components.
import ListContainer from './components/List/ListContainer'

const App = () => {
  return (
    <>
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My eCommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </header>
    <main>
      <ListContainer brands={ ['Apple', 'Samsung', 'Xiaomi'] }/>
    </main>
      
    </>
  );
};

export default App;