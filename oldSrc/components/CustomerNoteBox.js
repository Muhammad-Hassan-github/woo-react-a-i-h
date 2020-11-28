import React from "react";

const CustomerNoteBox = () => {
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
            Private Customer Note
          </span>
          <svg
            style={{ marginLeft: "15px", cursor: "pointer" }}
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

        <div className="p-2">
          <input
            className="form-control"
            type="text"
            placeholder="Readonly input here…"
            disabled
          />
          <a
            href="#"
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              color: "red",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit Note
          </a>
          <a
            href="#"
            className="pl-5"
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              color: "red",
            }}
          >
            Delete Note
          </a>
        </div>
        <p className="p-2" style={{ fontSize: "12px", color: "grey" }}>
          November 6,2020 at 10:27pm by maxenius
        </p>
        <div className="form-group col-md-10">
          <label for="inputState" style={{ fontSize: "14px" }}>
            Add private Note:
          </label>
          <textarea style={{ width: "220px" }}></textarea>

          {/* PopUp On Edit Note */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <textarea
                    style={{ width: "100%", height: "100px" }}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* PopUp End */}
        </div>
        <hr />
        <div className="form-row">
          <div className="form-group col-md-6" className="pl-3 pb-2">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontWeight: "500" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNoteBox;
