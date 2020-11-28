import React from 'react';
import Navbar from './Navbar';
import OrdersData from './OrdersData';
import Sidebar from './Sidebar';

const Orders = () => {
    return <div>
              <div className="dash">
        <div className="dash-nav dash-nav-dark">
          <Sidebar />
        </div>
        <div className="dash-app">
          <Navbar />
          <OrdersData/>
        </div>
      </div>
    </div>
}
 
export default Orders;