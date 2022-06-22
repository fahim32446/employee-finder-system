import React, { useState } from 'react'
import '../asset/Singup.css'
import { Link, useNavigate } from 'react-router-dom';
import {signup} from '../actions/auth'
import { useDispatch } from 'react-redux'

const initialState = { name: '', email: '', password: '', cpassword:'' };

const SingUp = () => {

  const [formData, setFormData] = useState(initialState);

  

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate))
    console.log(formData);
  }



  return (
    <>
      <div className="container">

        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}

          <div className="col-md-5 pr-lg-5 mb-5 mb-md-5">
            <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt className="img-fluid mb-3 d-none d-md-block" />
            <h1>Create an Account</h1>

          </div>

          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
              <div className="row">


                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text" />
                    </span>
                  </div>
                  <input id="firstName" type="text" onChange={handleChange} name="name" placeholder="Your Name" className="form-control bg-white border-left-0 border-md" />
                </div>


                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input id="email" type="email" onChange={handleChange} name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
                </div>





                {/* Job */}
                {/* <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted" />
                    </span>
                  </div>

                  <select id="job" onChange={handleChange} name="jobtitle" className="form-control custom-select bg-white border-left-0 border-md">
                    <option value>Choose Profession</option>
                    <option value>Designer</option>
                    <option value>Android Developer</option>
                    <option value>Web Developer</option>
                    <option value>Manager</option>
                    <option value>Accountant</option>
                  </select>
                </div> */}


                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input id="password" type="password" onChange={handleChange} name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
                </div>


                {/* Confirm Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input id="cpassword" type="password" onChange={handleChange} name="cpassword" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md" />
                </div>




                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button onClick={handelSubmit} href="#" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">Create your account</span>
                  </button>
                </div>





                {/* Divider Text */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center ">
                  <div className="border-bottom w-100 ml-5" />
                  <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                  <div className="border-bottom w-100 mr-5" />
                </div>




                {/* Already Registered */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">Already Registered?  <Link className="text-primary ml-2" to="/login">Login</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>




    </>
  )
}

export default SingUp