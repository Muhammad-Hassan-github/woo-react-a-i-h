import React from "react";
import DataHolder from "./DataHolder";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="dash">
        <div className="dash-nav dash-nav-dark">
          <Sidebar />
        </div>
        <div className="dash-app">
          <Navbar />
          <DataHolder />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
