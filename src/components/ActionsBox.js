import React from 'react';

const ActionBox = ({ propsData:{callCreateOrder , callUpdateOrder , orderId} }) => {
  
  return <div>
    <div
      className="card easion-card"
      style={{ boxShadow: "1px 3px 8px #888888", width: "255px" }}
    >
      <div className="easion-card-title" className="pl-3">
        {" "}
        <span style={{ fontWeight: "bold", color: "grey" }}>
          {" "}
                      Order actions{" "}
        </span>
        <svg
          style={{ marginLeft: "75px", cursor: "pointer" }}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-down"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
                    &nbsp;&nbsp;
                    <svg
          style={{ cursor: "pointer" }}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-up"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
      <hr />

      <div className="pl-2">
        <select
          style={{
            fontSize: "14px",
            border: "1px solid",
            width: "230px",
          }}
          className="form-control"
        >
          <option selected>panding payment</option>
          <option>Partial Paid</option>
          <option>processing</option>
          <option>on hold</option>
          <option>completed</option>
          <option>canceled</option>
        </select>
      </div>
      <hr />
      <div className="form-row">
        <div className="form-group col-md-6" className="pl-4 pb-2">
          <a
            href="#"
            style={{
              textDecoration: "underline",
              fontSize: "13px",
              color: "red",
            }}
          >
            Move to Trash
                      </a>
        </div>
        <div className="form-group col-md-6" className="pl-5 pb-2">
          {
            orderId ? <button type="button" className="btn btn-primary" onClick={callUpdateOrder}>
              Update
          </button>

              :

              <button type="button" className="btn btn-primary" onClick={callCreateOrder}>
              Create
        </button>
          }

        </div>
      </div>
    </div>
  </div>
}

export default ActionBox;