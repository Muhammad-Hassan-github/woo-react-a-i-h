import React from "react";

const CustomTaxBox = () => {
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
            Custom Tax{" "}
          </span>
          <svg
            style={{ marginLeft: "35px", cursor: "pointer" }}
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-chevron-down"
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
            class="bi bi-chevron-up"
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
        <div className="p-3">
          <div
            className="p-1"
            style={{
              textAlign: "center",
              backgroundColor: "#0275d8",
              color: "white",
            }}
          >
            <h5>Override Invoice Tax</h5>
          </div>
        </div>
        <div class="form-check" className="pl-3">
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Enable Custom Tax
          </p>
          <input
            style={{ marginLeft: "10px", marginTop: "0px" }}
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <div class="form-group col-md-4" className="pt-3 pl-3">
          <label
            for="inputState"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Select Type
          </label>
          <select
            style={{ width: "130px" }}
            id="inputState"
            class="form-control"
          >
            <option selected>Persentage</option>
            <option>Fixed Price</option>
          </select>
        </div>
        
        <div style={{marginLeft:"10px",marginTop:"10px"}} className="form-row">
        <div class="form-group col-md-10">
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTaxBox;
