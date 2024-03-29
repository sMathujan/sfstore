import React, { useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ReactGa from 'react-ga'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import PickupScreen from './screens/PickupScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ReservePickupScreen from './screens/ReservePickupScreen'
import DeliverMethodScreen from './screens/DeliverMethodScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductAnalysisScreen from './screens/ProductAnalysisScreen'
import SalesReportScreen from './screens/SalesReportScreen'

const App = () => {
  /*useEffect(() => {
    ReactGa.initialize('G-X9TPYGYMVT')

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])*/
  ReactGa.initialize('G-X9TPYGYMVT')
  ReactGa.pageview(window.location.pathname + window.location.search)
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/delivermethod' component={DeliverMethodScreen} />
          <Route path='/delivery' component={DeliveryScreen} />
          <Route path='/pickup' component={PickupScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/reservepickup' component={ReservePickupScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route
            path='/search/:keyword'
            component={HomeScreen}
            exact
          />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route
            path='/admin/topProductsAnalysis'
            component={ProductAnalysisScreen}
            exact
          />
          <Route path='/admin/salesReport' component={SalesReportScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
