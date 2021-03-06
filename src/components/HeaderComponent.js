import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,Modal, ModalHeader,ModalBody,Form, FormGroup, Input, Label, Button, ButtonDropdown, Row, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isNavOpen: false,
      IsModalOpen: false
    }
  }

  toggleNav () {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleLogin(event) {
    alert("Username: "+ this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
    event.preventDefault();
    this.toggleModal();
  }

  render() {

    return(
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={ ()=> this.toggleNav()}/>
          <NavbarBrand className="me-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante' /></NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen}  navbar>
            <Nav navbar >
              <NavItem>
                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className='ml-auto'>
              <NavItem>
                <Button outline className="btn text-white" onClick={this.toggleModal}><span className='fa fa-sign-in fa-lg '></span> Login</Button>
              </NavItem>
            </Nav>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
         <ModalHeader toggle={this.toggleModal}>
            <strong>Login</strong>
         </ModalHeader>
         <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                        innerRef={(input) => this.username = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                        innerRef={(input) => this.password = input}  />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember"
                        innerRef={(input) => this.remember = input}  />
                        Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
              </Form>         
        </ModalBody>
       </Modal>
    </div>
    );
  }
}

export default Header;