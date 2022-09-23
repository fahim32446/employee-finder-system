import React, { useState } from 'react'
import Img from '../asset/img.jpg'
import { GoogleLogin } from 'react-google-login'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { signin } from '../actions/auth'


const initialState = { email: '', password: '' };

const Login = () => {

    const {authData} = useSelector((state) => state.auth);

   


    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, navigate))
        console.log(formData);
    }



    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            navigate('../Profile')

        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (response) => {
        console.log(response);
        console.log("Google Sign In Unsuccessful");
    }

    return (
        <>


            <div className="content">
                <div className="container">
                    <div className="row">

                        <div style={{ backgroundColor: "#ebb13471", marginTop: "1%" }} className="col-md-6 col-lg-6 ml-auto py-5">
                            <div style={{ marginTop: "10%" }} className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3>Sign In</h3>
                                        <p className="mb-4">Welcome to Employee Finder</p>
                                    </div>


                                    <form onSubmit={handelSubmit}>

                                        <p className='text-danger'>{authData?.response?.data?.message}</p>
                                        
                                        <div className="form-group first">

                                            <label htmlFor="username">Email Address</label>
                                            <input type="email" name='email' onChange={handleChange} className="form-control" id="username" required />
                                        </div>
                                        <div className="form-group last mb-4">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name='password' onChange={handleChange} className="form-control" id="password" required/>
                                        </div>

                                        <button className='loginbtn btn btn-primary' type='submit'>Log In</button>
                                        <span className='mx-2 h5'>or</span>
                                        <div className='btn Google_login' >
                                            <GoogleLogin

                                                clientId="301952767388-tr0cgskc6pcdoqkanfqpov8v1ik5nqip.apps.googleusercontent.com"
                                                buttonText="Login With Google"
                                                // render={(renderProps) => (
                                                //     <button className='loginbtn btn btn-primary' type='submit'>Log In</button>
                                                // )}
                                                onSuccess={googleSuccess}
                                                onFailure={googleFailure}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                    </form>
                                    <div className="mt-3 text-center w-100">
                                        <p className="text-muted font-weight-bold">New to Employee Finder?
                                            <Link className="text-primary mx-2" to="/signup">Signup with Email</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <img src={Img} alt="Image" className="img-fluid" />
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Login