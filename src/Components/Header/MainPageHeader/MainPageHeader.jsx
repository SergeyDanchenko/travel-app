import SelectLanguage from '../../SelectLanguage/SelectLanguage'
import { Container, Navbar } from 'react-bootstrap';
import globeLogo from './../../../assets/images/globeLogo.png'


function MainPageHeader() {
  return (
    <Navbar bg="dark" variant="dark" className='justify-content-between'>
      <Container>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Globe Logo"
              src={globeLogo}
              width="25"
              height="25"
              className="d-inline-block align-top mr-2"
            />
         Travel-app
        </Navbar.Brand>
          <div style={{ color: 'white' }}>Country search input </div>
          <SelectLanguage />
        </Container>
      </Container>
    </Navbar>
  )
}

export default MainPageHeader;