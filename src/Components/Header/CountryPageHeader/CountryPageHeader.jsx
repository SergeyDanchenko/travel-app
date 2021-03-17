import SelectLanguage from '../../SelectLanguage/SelectLanguage'
import { Container, Navbar } from 'react-bootstrap';
import globeLogo from './../../../assets/images/globeLogo.png'


function CountryPageHeader() {
  return (
    <Navbar bg="dark" variant="dark" className='justify-content-between'>
      <Container>
        <Container>
          <Navbar.Brand href="#">
            <img
              alt="Globe Logo"
              src={globeLogo}
              width="25"
              height="25"
              className="d-inline-block align-top mr-2"
            />
            Travel-app
            </Navbar.Brand>
          <SelectLanguage />
        </Container>
      </Container>
    </Navbar>

  )
}

export default CountryPageHeader;