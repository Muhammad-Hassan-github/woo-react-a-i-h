import React from 'react';
import Navbar from './Navbar';
import ProductsData from './ProductsData';

import Sidebar from './Sidebar';

const Orders = () => {
    return <div>
              <div className="dash">
        <div className="dash-nav dash-nav-dark">
          <Sidebar />
        </div>
        <div className="dash-app">
          <Navbar />
          <ProductsData/>
        </div>
      </div>
    </div>
}
 
export default Orders;