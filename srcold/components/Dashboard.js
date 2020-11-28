import React from "react";
import DataHolder from "./DataHolder";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import queryString from 'query-string'
const Dashboard = (props) => {
 const {orderId} = queryString.parse(window.location.search)
  return (
    <>
    
    
      <div className="dash">
        <div className="dash-nav dash-nav-dark">
          <Sidebar />
        </div>
        <div className="dash-app">
          <Navbar />
          <DataHolder orderId={orderId} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
