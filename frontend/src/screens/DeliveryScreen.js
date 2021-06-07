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
  const [dsDivision, setDSDivision] = useState(deliveryAddress.dsDivision)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliveryAddress({ address, city, dsDivision }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
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
        <Form.Group controlId='dsDivision' >
          <Form.Label>DS Division</Form.Label>
          <Form.Control
            as='select'
            type='text'
            value={dsDivision}
            required
            onChange={(e) => setDSDivision(e.target.value)}
          >
            <option>Jaffna</option>
            <option>Nallur</option>
            <option>Kopay</option>
            <option>Point Pedro</option>
            <option>Uduvil</option>
          </Form.Control>
        </Form.Group>
        </div>

        <div class="form-group">
        <Button type='submit' variant='primary' disabled={dsDivision === 'Kayts'}>
          Continue
        </Button>
        </div>
      </Form>
    </FormContainer>
  )
}

export default DeliveryScreen