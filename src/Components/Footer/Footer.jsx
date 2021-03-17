import { Container, Image, Nav } from 'react-bootstrap';
import footer from './Footer.module.scss'
import logo_rsSchool from './../../assets/images/rs_school_js.svg'
import gitHubIcon from './../../assets/images/github_icon.svg'
import YouTubeIcon from './../../assets/images/YouTube.svg'

function Footer() {
    return (
        <div fluid className={`${footer.footer} `}>
            <Container className={footer.container}>
                <Nav className={footer.contactsContainer}
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="https://github.com/IrinaKorbut">
                            <div className={footer.contactsTitle}>Irina Korbut</div>
                            <Image className={footer.icon} src={gitHubIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="https://github.com/SergeyDanchenko">
                            <div className={footer.contactsTitle}>Sergey Danchenko</div>
                            <Image className={footer.icon} src={gitHubIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="https://github.com/IvanoPro">
                            <div className={footer.contactsTitle}>Ivano Pro</div>
                            <Image className={footer.icon} src={gitHubIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className={footer.logoYearContainer}>
                    <Nav className={footer.logoContainer}
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item className={footer.logo}>
                            <Nav.Link className={footer.link} href="https://rs.school/">
                                <Image className={footer.logo} src={logo_rsSchool} fluid />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className='year'>2021</div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;