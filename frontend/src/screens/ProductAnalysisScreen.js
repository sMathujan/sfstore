import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Pdf from "react-to-pdf";
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listTopProductsAnalysis } from '../actions/productActions'

const ProductAnalysisScreen = () => {
    
    const dispatch = useDispatch()

    const productTopRatedProductAnalysis = useSelector(state => state.productTopRatedProductAnalysis)
    const { loading, error, products } = productTopRatedProductAnalysis

    const ref = React.createRef();

    const options = {
      orientation: 'landscape',
      unit: 'in',
      format: [14,12]
    };

    useEffect(() => {
       dispatch(listTopProductsAnalysis())
    }, [dispatch])

    return (
        <>
        <div ref={ref}>
              <h1>Top Rated Products</h1>
            {loading ? 
                <Loader />
                : error ? 
                <Message variant='danger'>{error}</Message> 
                : 
                <>
                <Table striped bordered hover responsive className='table-sm table-primary' >
            <thead>
              <tr>
                {/*<th>ID</th>*/}
                <th>NAME</th>
                <th>RATING</th>
                <th>NUMBER OF REVIEWERS</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>  
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  {/*<td>{product._id}</td>*/}
                  <td>{product.name}</td>
                  <td>{product.rating}</td>
                  <td>{product.numReviews}</td>
                  <td>Rs. {product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td> 
                </tr>
              ))}
            </tbody>
          </Table>  
         
                </>
            } 
            </div>
            <Pdf targetRef={ref} filename="Product Evaluation Report.pdf" options={options}>
              {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">Download PDF</button>}
            </Pdf>
           
        </>
    )
}

export default ProductAnalysisScreen
