import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "./Dashboard.css";
import SmallBoxes from "./SmallBoxes";
import DetailsColumn1 from "./DetailsColumn1";
import DetailsColumn2 from "./DetailsColumn2";
import DetailsColumn3 from "./DetailsColumn3";

const DataHolder = () => {
  const [state, setState] = useState({

    name: null,
    productId: null,
    quantity: 1,
    status:null,
    customers: [],
    products: [],
    customerId: null,
    items: [],
    b_f_name: null,
    b_l_name: null,
    b_a_l_1: null,
    b_a_l_2: null,
    b_city: null,
    b_state: null,
    b_post_code: null,
    b_country: null,
    b_email: null,
    b_phone: null,
    b_company: null,
    b_t_id:null,
    b_payment_method:null,
    s_f_name: null,
    s_l_name: null,
    s_a_l_1: null,
    s_a_l_2: null,
    s_city: null,
    s_state: null,
    s_post_code: null,
    s_country: null,
    s_company: null,
    s_c_note:null,
    flag2: true,
    flag3: true,

    shipping_charges: 0,
    payment: "true",
    flag: true

  });
  let handleChange = ( name , e )=> {
    setState({...state,[name]:e.target.value})   
};



  return (
    <>
    {console.log(state)}
      <main className="dash-content">
        
        <div className="container-fluid">
          {/* Order Details first table */}
          <div className="row">
            <div className="col-xl-9" >
              <div
                style={{ boxShadow: "1px 2px 8px #888888" }}
                className="card easion-card"
              >
                <div className="card-header">
                  <div>
                    <b style={{ fontSize: "20px", color: "#636363" }}>
                      Order #13000492 details
                    </b>
                    <br />
                    Payment via Direct bank transfer
                  </div>
                </div>
                <div className="card-body easion-card-body-chart">
                  {/* ==================================================================== */}
                  {/* Order Details Column 1 */}
                  <div className="row">
                    <div className="col-xl-3">
                      <DetailsColumn1 propsData={{state , handleChange}} />
                    </div>
                    {/* =========================================== */}

                    {/* Order Details Column 2 */}

                    <div style={{ marginLeft: "35px" }} className="col-xl-3">
                      <DetailsColumn2 propsData={{state,handleChange}} />
                    </div>
                    {/* ==================================================== */}

                    {/* Order Details Column 2 */}

                    <div style={{ marginLeft: "75px" }} className="col-xl-3">
                      <DetailsColumn3 propsData={{state,handleChange}} />
                      {/* ==================================================== */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Small Right Side Boxes */}
            <div className="col-xl-3">
              <SmallBoxes />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DataHolder;
