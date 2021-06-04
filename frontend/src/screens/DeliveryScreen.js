import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveDeliveryAddress } from '../actions/cartActions'

const DeliveryScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { deliveryAddress } = cart

  const [address, setAddress] = useState(deliveryAddress.address)
  const [city, setCity] = useState(deliveryAddress.city)
  const [gnDivision, setGNDivision] = useState(deliveryAddress.gnDivision)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliveryAddress({ address, city, gnDivision }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Delivery</h1>
      <Form onSubmit={submitHandler}>
        <div class="form-group">
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        </div>

        <div class="form-group">
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        </div>

        <div class="form-group">
        <Form.Group controlId='gnDivision'>
          <Form.Label>GN Division</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Grama Niladhari Division'
            value={gnDivision}
            required
            onChange={(e) => setGNDivision(e.target.value)}
          ></Form.Control>
        </Form.Group>
        </div>

        <div class="form-group">
        <Button type='submit' variant='primary'>
          Continue
        </Button>
        </div>
      </Form>
    </FormContainer>
  )
}

export default DeliveryScreen