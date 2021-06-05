import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4, step5, step6, step7 }) => {
  return (
    <center>
    <ul class="nav nav-pills">
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/delivermethod'>
            <Nav.Link>Delivery / Pickup</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Delivery / Pickup</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/delivery'>
            <Nav.Link>Delivery</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Delivery</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/pickup'>
            <Nav.Link>Pickup</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pickup</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step5 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step6 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step7 ? (
          <LinkContainer to='/reservepickup'>
            <Nav.Link>Pickup Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pickup Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
    </ul>
    </center>
  )
}

export default CheckoutSteps