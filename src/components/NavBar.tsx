import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Taller unidad 7</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;