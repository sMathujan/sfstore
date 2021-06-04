import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { deliveryAddress } = cart

  if (!deliveryAddress.address) {
    history.push('/delivery')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <div class="form-group">
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            </div>

            <div class="form-group">
            <Form.Check
              type='radio'
              label='Pay On Delivery'
              id='Pay On Delivery'
              name='paymentMethod'
              value='Pay On Delivery'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> 
            </div>
          </Col>
        </Form.Group>

        <div class="form-group">
        <Button type='submit' variant='primary'>
          Continue
        </Button>
        </div>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen