import React, { useEffect, useState } from 'react'
import '../asset/About.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost, sendMessage } from '../actions/posts'
import Loading from './Loading';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

const About = () => {
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.posts);
  const { id } = useParams();
  const navigation = useNavigate();
  const [message, setMessage] = useState({ name: '', EmployerEmail: '', text: '', id: id });


  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (message.EmployerEmail.length > 2 && message.text.length > 2) {
      dispatch(sendMessage(message));

    }

    else {
      alert("Enter your Email and Text")
    }

  }


  useEffect(() => {

    dispatch(getPost(id))

  }, [id]);



  if (!post) return <Loading />;

  if (isLoading) {
    return (
      <Loading />
    );
  }


  return (
    <>

      <div className="aboutBody">
        <div className="container">
          <div className="main-body">

            <div className="row gutters-sm">

              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={post.file} alt="Admin" className="My_rounded-circle" />

                      <div className="mt-3">
                        <h4>{post.name}</h4>
                        <p className="text-secondary mb-1">{post.jobtitle}</p>

                        <p className="font-size-sm mb-2">{post.email}</p>
                        <p className="font-size-sm mb-2 badge bg-primary text-wrap" >{`Expected Salary: ${Number(post.Salary).toLocaleString('en-US')}/tk`}</p> <br />
                        <p className="font-size-sm mb-2 badge bg-primary text-wrap">{post.Job_type}</p>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center">

                      <div className="w-100">
                        <h6>About My Self</h6>

                        {post.about.length === 0 ? <p className="text-secondary mb-1">To build up a career in a well-established and environment friendly organization where acquired knowledge and expertise can be used effectively and efficiently</p> : <p className="text-secondary mb-1">{post.about}</p>}

                        <h6>Interested About</h6>
                        <span className=" border p-1 m-1 rounded text-muted font-size-sm mb-2">{post?.Interested}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                      <h5 className="text-secondary"><a style={{ textDecoration: "none" }} className='badge bg-info text-wrap' href={`${post.Website}`}>Check</a></h5>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                      <span className="text-secondary"><h5 className="text-secondary"><a style={{ textDecoration: "none" }} className='badge bg-info text-wrap' href={`${post.Github}`}>Github</a></h5></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                        <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
                      </svg>Skype</h6>
                      <h4 className="text-white text-secondary badge bg-info">{post.Skype}</h4>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>Linkedin</h6>
                      <span className="text-secondary">

                        <h5 className="text-secondary"><a style={{ textDecoration: "none" }} className='badge bg-info text-wrap' href={`${post.linkedin}`}>linkedin</a></h5></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                      <span className="text-secondary"><h5 className="text-secondary"><a style={{ textDecoration: "none" }} className='badge bg-info text-wrap' href={`${post.Facebook}`}>Facebook</a></h5></span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center">
                      <div className="w-100">

                        <form onSubmit={handelSubmit}>
                          <h6>Contact to {post.name}</h6>
                          <div className="mb-3">
                            <input onChange={handleChange} type="name" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                          </div>

                          <div className="mb-3">
                            <input onChange={handleChange} type="email" name='EmployerEmail' className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                          </div>

                          <div className="mb-3">
                            <textarea onChange={handleChange} name="text" className="form-control" placeholder='Type Your Message' id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>

                          <div id="liveAlertPlaceholder"></div>

                          <button className="btn btn-warning" id="liveAlertBtn" type="submit">Send Message</button>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">

                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title mb-5 text-center text-muted">Personal Information</h4>


                    <table className="table">
                      <thead>

                      </thead>
                      <tbody>

                        <tr>
                          <td><h6>Full Name</h6> </td>
                          <td>{post.name}</td>
                        </tr>

                        <tr>
                          <td><h6>Email</h6></td>
                          <td>{post.email}</td>
                        </tr>

                        <tr>
                          <td><h6>Phone</h6></td>
                          <td>{post.phone}</td>
                        </tr>

                        <tr>
                          <td><h6>Address</h6></td>
                          <td>{post.address}</td>
                        </tr>

                        <tr>
                          <td><h6>Date of Birth</h6></td>
                          <td>{post.dob}</td>
                        </tr>

                      </tbody>
                    </table>


                  </div>
                </div>



                <div className="row gutters-sm">
                  <div className="col-sm-12 mb-3">
                    <div className="card h-100">

                      <div className="card-body ">
                        <h4 className="card-title mb-3 text-center text-muted">Skills</h4>


                        {post.skills.map((skill, index) => (
                          <li style={{ backgroundColor: '#ebb13471' }} className="d-inline-block rounded list-group-item m-1">{`${index + 1}. ${skill}`}</li>
                        ))}

                      </div>
                    </div>
                  </div>


                  <div className="col-sm-12 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="card-title mb-3 text-center text-muted">Top 3 Recent Project</h4>


                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Project Name</th>
                              <th scope="col">Github Link</th>

                            </tr>
                          </thead>
                          <tbody>

                            {post.ProjectOne.length === 0 ? null :
                              <tr>
                                <td>{post.ProjectOne}</td>
                                <td><a style={{ textDecoration: "none", color: "green" }} href={post.ProjectOneGit}>Check Here</a></td>
                              </tr>
                            }

                            {post.ProjectTwo.length === 0 ? null :
                              <tr>
                                <td>{post.ProjectTwo}</td>
                                <td><a style={{ textDecoration: "none", color: "green" }} href={post.ProjectTwoGit}>Check Here</a></td>
                              </tr>
                            }

                            {post.ProjectThree.length === 0 ? null :
                              <tr>
                                <td>{post.ProjectThree}</td>
                                <td><a style={{ textDecoration: "none", color: "green" }} href={post.ProjectThreeGit}>Check Here</a>
                                </td>
                              </tr>
                            }
                          </tbody>
                        </table>



                      </div>
                    </div>
                  </div>

                </div>


                <div className="card mb-3 ">
                  <div className="card-body">
                    <h4 className="card-title m-3 text-center text-muted">Academic Information</h4>
                    <table className="table">
                      <thead>
                        <tr>

                          <th scope="col">Institute Name</th>
                          <th scope="col">CERTIFICATES</th>
                          <th scope="col">GPA/CGPA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{post.schoolName}</td>
                          <td>{post.schoolCertificate}</td>
                          <td>{post.schoolGpa}</td>
                        </tr>
                        <tr>

                          <td>{post.collageName}</td>
                          <td>{post.collageCertificate}</td>
                          <td>{post.collageGpa}</td>
                        </tr>
                        <tr>
                          <td>{post.honrsName}</td>
                          <td>{post.honrsCertificate}</td>
                          <td>{post.honrsCGPA}</td>
                        </tr>

                        <tr>
                          <td>{post.honrsName1}</td>
                          <td>{post.honrsCertificate1}</td>
                          <td>{post.honrsCGPA1}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>



                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title m-3 text-center text-muted">Previous Work Experience</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Company Name</th>
                          <th scope="col">Joined Date</th>
                          <th scope="col">Leave Date</th>
                        </tr>
                      </thead>
                      <tbody>

                        {post.workExperience1.length === 0 ? null :
                          <tr>
                            <td>{post.workExperience1}</td>
                            <td>{post.workJoin1}</td>
                            <td>{post.workLeave1.length === 0 ? "Running" : post.workLeave1}</td>
                          </tr>
                        }
                        {post.workExperience2.length === 0 ? null :
                          <tr>
                            <td>{post.workExperience2}</td>
                            <td>{post.workJoin2}</td>
                            <td>{post.workLeave2.length === 0 ? "Running" : post.workLeave2}</td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default About