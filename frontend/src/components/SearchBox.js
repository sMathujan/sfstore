import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className="d-flex">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='form-control me-sm-2'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='my-2 my-sm-0 btn btn-outline-primary'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox