import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Form, Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Pdf from "react-to-pdf";
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrdersForSalesReport } from '../actions/orderActions'

const SalesReportScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderListForSalesReport = useSelector((state) => state.orderListForSalesReport)
  const { loading, error, orders } = orderListForSalesReport

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [orderDate, setOrderDate] = useState('')

  const ref = React.createRef();

    const options = {
      orientation: 'landscape',
      unit: 'in',
      format: [14,12]
    };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrdersForSalesReport())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(orderDate)
  }

  return (
    <>
    <div ref={ref}>
      <h1>Star Food Store Sales Report</h1>
        <Row>
            <Col xs={2}><h2>Date:</h2></Col>
            <Col xs={2}>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='orderDate'>
                    <Form.Control
                        type='text'
                        placeholder='Enter Order Date'
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>
            </Form>
            </Col>
        </Row>

        <Row>
            <Col xs={2}><h2>Total Orders:</h2></Col>
            <Col xs={2}>
                <h2>{!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).length}</h2>
            </Col>

            <Col xs={2}><h2>Total Delivery Orders:</h2></Col>
            <Col xs={2}>
                <h2>{!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).filter((order) => order.deliverMethod == 'Delivery').length}</h2>
            </Col>

            <Col xs={2}><h2>Total PickUP Orders:</h2></Col>
            <Col xs={2}>
                <h2>{!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).filter((order) => order.deliverMethod == 'PickUP').length}</h2>
            </Col>    
        </Row>

        <Row>
            <Col xs={2}><h2>Total Sales:</h2></Col>
            <Col xs={2}>
                <h2>Rs. {!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).reduce((acc, order) => acc + order.totalPrice, 0).toFixed(2)}</h2>
            </Col>

            <Col xs={2}><h2>Total Delivery Sales:</h2></Col>
            <Col xs={2}>
                <h2>Rs. {!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).filter((order) => order.deliverMethod == 'Delivery').reduce((acc, order) => acc + order.totalPrice, 0).toFixed(2)}</h2>
            </Col>

            <Col xs={2}><h2>Total PickUP Sales:</h2></Col>
            <Col xs={2}>
                <h2>Rs. {!orders ? "" : orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).filter((order) => order.deliverMethod == 'PickUP').reduce((acc, order) => acc + order.totalPrice, 0).toFixed(2)}</h2>
            </Col>
        </Row>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm table-primary'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>DELIVER METHOD</th>
              <th>TOTAL</th>
              {/*<th>PAID</th>
              <th>DELIVERED / PICKEDUP</th>
              <th></th>*/}
              </tr>
          </thead>
          <tbody>
            {orders.filter((order) => order.createdAt.substring(0, 10) == orderDate).map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.deliverMethod}</td>
                <td>Rs. {order.totalPrice}</td>
                {/*<td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button className='btn-sm btn-outline-primary' variant='light'>
                      Details
                    </Button>
                  </LinkContainer>
                  </td>*/}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>

        <Pdf targetRef={ref} filename="Sales Report.pdf" options={options}>
            {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">Download PDF</button>}
        </Pdf>
    </>
  )
}

export default SalesReportScreen