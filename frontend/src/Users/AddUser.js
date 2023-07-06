import React from 'react'

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <div className="mb-3">
              <lable htmlFor="Name" className="form-lable">
                <h6>Name</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <lable htmlFor="Username" className="form-lable">
                <h6>Username</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 text
                 placeholder="Enter your username"
                 name ="username"/>
            </div>
            <div className="mb-3">
              <lable htmlFor="Name" className="form-lable">
              <h6>E-mail</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter your e-mail address"
                 name ="email"/>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
        </div>
      </div>
    </div>
  )
}
