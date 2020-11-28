import React from "react";

const CustomersBox = () => {
  return (
    <div>
      <div
        className="card easion-card"
        style={{ boxShadow: "1px 3px 8px #888888", width: "255px" }}
      >
        <div className="easion-card-title" className="pl-3">
          {" "}
          <span style={{ fontWeight: "bold", color: "grey" }}>
            {" "}
            View Customer Order
          </span>
          <svg
            style={{ marginLeft: "25px", cursor: "pointer" }}
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
        <div className="form-row">
          <div className="form-group col-md-6" className="pl-4 pb-2">
            <a
              href="#"
              style={{
                textDecoration: "underline",
                fontSize: "13px",
              }}
            >
              Click to view all orders
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersBox;
