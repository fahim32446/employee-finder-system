import React, { useState, useEffect } from 'react'
import '../asset/Profile.css'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const Profile = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({
    name: '', email: '', phone: '', address: '', dob: '', schoolName: '', schoolCertificate: '', schoolGpa: '', collageName: '', collageCertificate: '', collageGpa: '', Salary: '', honrsName: '', honrsCertificate: '', honrsCGPA: '', workExperience1: '', workJoin1: '', workLeave1: '', workExperience2: '', workJoin2: '', workLeave2: '', skills: [], about: '', file: '', Website: '', Github: '', Facebook: '', linkedin: '', Skype: '', jobtitle: '', Interested: '', ProjectOne: '', ProjectOneGit: '', ProjectTwo: '', ProjectTwoGit: '', ProjectThree: '', ProjectThreeGit: '', Job_type: ''
  });

  const chooseSkills = [
    "JavaScript", "ReactJs", "Css", "NodeJs", "ExpressJs", "Mongoose", "MySql", "Java", "C#", "C", "C+", "Php", "Laravel", "Wordpress", "Python", "Django", "CCNA", "Flutter", "Html", "Photoshop", "Lightroom", "PremierePro", "UI/UX", "Bootstrap", "Android Studio"
  ];


  console.log(postData);

  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));


  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
    // const token = user?.token;
    // JWT...

    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location])

  const handelSubmit = (e) => {

    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    navigate('../');
  }


  return (
    <>

      <div className="container rounded bg-white mt-1 mb-1">
        {user ? ("") : (<h5 style={{ padding: '8px', border: '1px solid red', borderRadius: '5px' }} className="text-center mt-5">You Need To Login Before Creating Profile</h5>)}
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-0">
              <img className="rounded-circle mt-5" width="150px" src=
                {user ? postData.file :

                //   (
                //   "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"

                // ) 
                
                (
                  "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                )}
              />

              <div className="font-weight-bold">
                {user ? (
                  <div>
                    <h4>{user.result.name}</h4>
                    <h6 className="text-black mt-2">Account Email: {user.result.email}</h6>
                  </div>

                ) : (

                  <Link className="text-white btn btn-warning" to="/login">Log In to Your Profile</Link>

                )}

              </div>

            </div>



            <div className='mt-5'>
              <label htmlFor="formFile" className="form-label">Change Profile Picture</label>
              <FileBase className="form-control"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPostData({ ...postData, file: base64 })}
              />
            </div>

            <div className='mt-3'>
              <h6>Select Your Job Title</h6>
              <select id="job" name="jobtitle" value={postData.jobtitle} onChange={(e) => setPostData({ ...postData, jobtitle: e.target.value })} className="form-control custom-select bg-white border-left-0 border-md">
                <option value>Choose Profession</option>
                <option value="Designer">Designer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
              </select>

            </div>

            <div className='mt-3'>
              <h6>Select Job Type</h6>
              <select id="job_type" name="Job_type" value={postData.Job_type} onChange={(e) => setPostData({ ...postData, Job_type: e.target.value })} className="form-control custom-select bg-white border-left-0 border-md">
                <option value>Choose Profession</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
              </select>

            </div>

            <div className="col-md-12 mt-3"><label className="labels">What Your Expected Salary (BDT) </label><input type="number" name="Salary" value={postData.Salary} onChange={(e) => setPostData({ ...postData, Salary: e.target.value })} className="form-control" /></div>


            <div className="col-md-12 mt-3"><label className="labels">Your Hobby/Interest </label><input name="Interested" value={postData.Interested} onChange={(e) => setPostData({ ...postData, Interested: e.target.value.split(',') })} type="text" className="form-control" /></div>

          </div>


          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Update Your Profile</h4>
              </div>

              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Your Full Name</label>
                  <input name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} type="text" className="form-control" /></div>
              </div>


              <div className="row mt-0">
                <div className="col-md-12"><label className="labels">Email</label><input name="email" value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-12"><label className="labels">Phone Number</label><input name="phone" value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-12"><label className="labels">Address</label><input name="address" value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-12"><label className="labels">Date of Birth</label><input name="dob" value={postData.dob} onChange={(e) => setPostData({ ...postData, dob: e.target.value })} type="date" className="form-control" /></div>
              </div>



              <div className="row mt-3">
                <h5>Educational Information</h5>
                <div className="col-md-4"><label className="labels">School Name</label><input name="schoolName" value={postData.schoolName} onChange={(e) => setPostData({ ...postData, schoolName: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Certificates</label><input name="schoolCertificate" value={postData.schoolCertificate} onChange={(e) => setPostData({ ...postData, schoolCertificate: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">GPA</label><input name="schoolGpa" value={postData.schoolGpa} onChange={(e) => setPostData({ ...postData, schoolGpa: e.target.value })} type="text" className="form-control" /></div>
              </div>


              <div className="row mt-3">

                <div className="col-md-4"><label className="labels">Collage Name</label><input name="collageName" value={postData.collageName} onChange={(e) => setPostData({ ...postData, collageName: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Certificates</label><input name="collageCertificate" value={postData.collageCertificate} onChange={(e) => setPostData({ ...postData, collageCertificate: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">GPA</label><input name="collageGpa" value={postData.collageGpa} onChange={(e) => setPostData({ ...postData, collageGpa: e.target.value })} type="text" className="form-control" /></div>
              </div>


              <div className="row mt-3">

                <div className="col-md-4"><label className="labels">Institute Name</label><input name="honrsName" value={postData.honrsName} onChange={(e) => setPostData({ ...postData, honrsName: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Certificates</label><input name="honrsCertificate" value={postData.honrsCertificate} onChange={(e) => setPostData({ ...postData, honrsCertificate: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">CGPA</label><input name="honrsCGPA" value={postData.honrsCGPA} onChange={(e) => setPostData({ ...postData, honrsCGPA: e.target.value })} type="text" className="form-control" /></div>
              </div>

              {/*........................................... Your Top Three Project Info ....................................*/}

              <div className="row mt-3">
                <h5>Your Top Three Project Info</h5>
                <div className="col-md-6"><label className="labels">First Project</label><input name="ProjectOne" value={postData.ProjectOne} onChange={(e) => setPostData({ ...postData, ProjectOne: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-6"><label className="labels">First Project Github Link</label><input name="ProjectOneGit" value={postData.ProjectOneGit} onChange={(e) => setPostData({ ...postData, ProjectOneGit: e.target.value })} type="text" className="form-control" /></div>

              </div>

              <div className="row mt-3">

                <div className="col-md-6"><label className="labels">Second Project</label><input name="ProjectTwo" value={postData.ProjectTwo} onChange={(e) => setPostData({ ...postData, ProjectTwo: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-6"><label className="labels">Second Project Github Link</label><input name="ProjectTwoGit" value={postData.ProjectTwoGit} onChange={(e) => setPostData({ ...postData, ProjectTwoGit: e.target.value })} type="text" className="form-control" /></div>

              </div>

              <div className="row mt-3">

                <div className="col-md-6"><label className="labels">Third Project</label><input name="ProjectThree" value={postData.ProjectThree} onChange={(e) => setPostData({ ...postData, ProjectThree: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-6"><label className="labels">Third Project Github Link</label><input name="ProjectThreeGit" value={postData.ProjectThreeGit} onChange={(e) => setPostData({ ...postData, ProjectThreeGit: e.target.value })} type="text" className="form-control" /></div>

              </div>

            </div>
          </div>

          <div className="col-md-4">


            <div className="p-3 py-5">
              <div className="row mt-3">
                <h5>Previous Experience</h5>
                <div className="col-md-4"><label className="labels">Company Name</label><input name="workExperience1" value={postData.workExperience1} onChange={(e) => setPostData({ ...postData, workExperience1: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Joined Date</label><input name="workJoin1" value={postData.workJoin1} onChange={(e) => setPostData({ ...postData, workJoin1: e.target.value })} type="date" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Leave Date</label><input name="workLeave1" value={postData.workLeave1} onChange={(e) => setPostData({ ...postData, workLeave1: e.target.value })} type="date" className="form-control" /></div>
              </div>



              <div className="row mt-3">
                <div className="col-md-4"><label className="labels">Company Name</label><input name="workExperience2" value={postData.workExperience2} onChange={(e) => setPostData({ ...postData, workExperience2: e.target.value })} type="text" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Joined Date</label><input name="workJoin2" value={postData.workJoin2} onChange={(e) => setPostData({ ...postData, workJoin2: e.target.value })} type="date" className="form-control" /></div>

                <div className="col-md-4"><label className="labels">Leave Date</label><input name="workLeave2" value={postData.workLeave2} onChange={(e) => setPostData({ ...postData, workLeave2: e.target.value })} type="date" className="form-control" /></div>

              </div>
            </div>


            {/* <div className="col-md-12"><label className="labels">Your Skills (Up to 5)</label><input name="skills" value={postData.skills} onChange={(e) => setPostData({ ...postData, skills: e.target.value.toUpperCase().split(',').slice(0, 5) })} type="text" className="form-control" /></div> */}

            <div>
              <Autocomplete sx={{ span: { marginTop: "13%" } }}
                multiple
                limitTags={2}
                value={postData.skills}
                options={chooseSkills}
                getOptionLabel={(option) => option}
                onChange={(event, value) => setPostData({ ...postData, skills: value.slice(0, 5) })}
                renderInput={(params) => (
                  <TextField className="labels" {...params} label="Your Skills (Up to 5)" variant="outlined" fullWidth />
                )}
              />
            </div>




            <div className="row mt-3">
              <h5>About Your Self</h5>
              <div className="col-md-12"><label className="labels">Write Something Your Self</label>
                <textarea name='about' value={postData.about}
                  onChange={(e) => setPostData({ ...postData, about: e.target.value })}
                  type="text"
                  className="form-control" />
              </div>
            </div>


            <div className="row mt-5">
              <h5>Social Media Info</h5>

              <div className="col-md-12"><label className="labels">Website Link</label><input name="Website" value={postData.Website} onChange={(e) => setPostData({ ...postData, Website: e.target.value })} type="text" className="form-control" /></div>

              <div className="col-md-12"><label className="labels">Github Link</label><input name="Github" value={postData.Github} onChange={(e) => setPostData({ ...postData, Github: e.target.value })} type="text" className="form-control" /></div>

              <div className="col-md-12"><label className="labels">Facebook Profile Link</label><input name="Facebook" value={postData.Facebook} onChange={(e) => setPostData({ ...postData, Facebook: e.target.value })} type="text" className="form-control" /></div>

              <div className="col-md-12"><label className="labels">Linkedin Profile Link</label><input name="linkedin" value={postData.linkedin} onChange={(e) => setPostData({ ...postData, linkedin: e.target.value })} type="text" className="form-control" /></div>

              <div className="col-md-12"><label className="labels">Skype Profile Link</label><input name="Skype" value={postData.Skype} onChange={(e) => setPostData({ ...postData, Skype: e.target.value })} type="text" className="form-control" /></div>


            </div>

          </div>
        </div>
        <div className="mt-2 text-center">
          <button className="btn btn-primary profile-button" onClick={handelSubmit} type="submit">Save Profile</button>
        </div>
      </div>




    </>
  )
}

export default Profile