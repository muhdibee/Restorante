import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand>Restorante</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent/>
    </div>
  );
}

export default App;
