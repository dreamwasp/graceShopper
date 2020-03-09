import React from 'react'
import {connect} from 'react-redux'
import {fetchCompletedOrders} from '../store'
import OrderHistoryList from './OrderHistoryList'

class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.fetchCompletedOrders()
  }

  render() {
    return this.props.completedOrders.map(order => {
      return (
        <div key={order.id}>
          <div>Id: {order.id}</div>
          <div>Total Quantity: {order.totalQuantity}</div>
          <div>Total Price: {order.totalPrice / 100}</div>

          {/* <OrderHistoryList order={order} /> */}
        </div>
      )
    })
  }
}

const mapStateToProps = state => ({
  completedOrders: state.orders.completedOrders
})
const mapDispatchToProps = dispatch => ({
  fetchCompletedOrders: () => dispatch(fetchCompletedOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
