import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePickupInfo } from '../actions/cartActions'
import Calendar from "react-calendar"

const PickupScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { pickupInfo } = cart

  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState(pickupInfo.timeSlot)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePickupInfo({ date, timeSlot }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step4 />
      <h1>Rserve Pickup</h1>
      <Form onSubmit={submitHandler}>
        <div class="form-group">
        <Form.Group controlId='date'>
          <Form.Label>Reserve Date</Form.Label>
          <Calendar value={date} onChange={setDate} required />
        </Form.Group>
        </div>

        <div class="form-group">
        <Form.Group controlId='timeSlot'>
          <Form.Label>Reserve Time Slot</Form.Label>
          <Form.Control
            as='select'
            type='text'
            value={timeSlot}
            required
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option>12pm - 1pm</option>
            <option>3pm - 4pm</option>
            <option>5pm - 6pm</option>
            <option>6pm - 7pm</option>
            <option>7pm - 8pm</option>
          </Form.Control>
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

export default PickupScreen