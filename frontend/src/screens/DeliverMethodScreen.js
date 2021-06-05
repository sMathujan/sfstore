import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveDeliverMethod } from '../actions/cartActions'
  
const DeliverMethodScreen = ({ history }) => {
  const [deliverMethod, setDeliverMethod] = useState('Delivery')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliverMethod(deliverMethod))
    if(deliverMethod == 'Delivery'){
        history.push('/delivery')
    } else {
        history.push('/pickup')
    } 
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Deliver Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <div class="form-group">
            <Form.Check
              type='radio'
              label='Delivery'
              id='Delivery'
              name='deliverMethod'
              value='Delivery'
              checked
              onChange={(e) => setDeliverMethod(e.target.value)}
            ></Form.Check>
            </div>

            <div class="form-group">
            <Form.Check
              type='radio'
              label='Pickup'
              id='PickUP'
              name='deliverMethod'
              value='PickUP'
              onChange={(e) => setDeliverMethod(e.target.value)}
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

export default DeliverMethodScreen