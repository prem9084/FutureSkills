import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Header.css";

const API_URL = "http://localhost:8000";
const Header = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async (e) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/v1/cards/create`, {
        id,
        title,
        description,
      });

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-dark p-3">
        <nav className="ms-auto">
          <div className="container header d-flex flex-row justify-content-between">
            <div>
              <div className="text-light">
                <div className="d-flex gap-1">
                  <img
                    src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
                    alt=""
                  />{" "}
                  |<span>HelpCenter</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Submit a request
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      <div>
                        <input
                          type="number"
                          placeholder="Enter id"
                          className="border-0 w-25"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Enter Title"
                          className="border-0"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <textarea
                      type="text"
                      placeholder="Enter Description"
                      className="w-100"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCreate}
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
