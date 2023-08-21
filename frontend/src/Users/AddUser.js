import React ,{useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  })

  const {name, username, email} = user;

  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit =async e => {
       e.preventDefault();
       await axios.post("http://localhost:8081/user", user);
       navigate("/")
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Student</h2>

            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <lable htmlFor="Name" className="form-lable">
                <h6>Name</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter student's name"
                 name="name"
                 value={name}
                 onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <lable htmlFor="Username" className="form-lable">
                <h6>Username</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 text
                 placeholder="Enter student's username"
                 name ="username"
                 value={username}
                 onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <lable htmlFor="Name" className="form-lable">
              <h6>E-mail</h6>
              </lable>
              <input
                 type={"text"}
                 className="form-control"
                 placeholder="Enter student's e-mail address"
                 name ="email"
                 value={email}
                 onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
