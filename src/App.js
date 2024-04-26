import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from './components/Slider';
import './App.css'

import Header from './components/Header'
import Search from './components/Search'

function ColorSchemesExample() {
  return (
    <>
     <Header />

      <Navbar className='abaixo'>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Nav>
            <Nav.Link href="#home" style={{color:'white'}}>CARNES</Nav.Link>
            <Nav.Link href="#features" style={{color:'white'}}>AVES</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>PEIXES</Nav.Link>
            <Nav.Link href="#home" style={{color:'white'}}>SALADAS E MOLHOS</Nav.Link>
            <Nav.Link href="#features" style={{color:'white'}}>BOLOS E TORTAS</Nav.Link>
            <Nav.Link href="#features" style={{color:'white'}}>DOCES E SOBREMESAS</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'white'}}>BEBIDAS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Slider />

      <Search />

    </>
  );
}

export default ColorSchemesExample;