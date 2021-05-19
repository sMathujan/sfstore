import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' bg='primary' collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand><img className='header__logo' src='https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/83540013_111331520404747_8202654152514338816_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=vdO-cDp1qbMAX_e5GAA&_nc_ht=scontent.fcmb11-1.fna&oh=e8b25856f2f99f1cf6505ecbdc865e0e&oe=609E0BA5'/></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart' />Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                            <Nav.Link><i className='fas fa-user' />Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
