import React, { useEffect, useState } from 'react'
import '../asset/Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { deletePost, getPosts, getPostsSearch, getPostsByCreator } from '../actions/posts'
import Loading from './Loading';



const MyProfile = ({ setCurrentId }) => {

  const navigate = useNavigate();

  const { posts, isLoading } = useSelector((state) => state.posts);



  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [search, setSearch] = useState([]);

  const LoginUser = user?.result?.googleId || user?.result?._id;



  useEffect(() => {

    dispatch(getPostsByCreator(LoginUser));

  }, [dispatch]);

 
 
  if (!LoginUser) return  (<h5 style={{ padding: '8px', border: '1px solid red', borderRadius: '5px' }} className="container text-center mt-5">You Need To Login To See Your All Profile</h5>)  ;

  return (

    isLoading ? <Loading /> : (

      <div className="container">
        
        <div className="row py-3 mt-4 ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">

              {posts.map((post, key) => (

                <div className="col-lg-3 col-md-6">

                  <div className="card card_hover user-card">

                    <div className="ribbon-wrapper">
                      <div className="ribbon">{post.Job_type}</div>
                    </div>

                    <div className="card-block rounded">

                      <div className="user-image">
                        <img src={post.file} className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600">{post.name}</h6>
                      <p className="text-muted">{post.jobtitle}</p>
                      <p className="text-muted">{`Demand: ${post.Salary ? post.Salary : "0.00"} ৳`}</p>
                      <hr />

                      <span className='my_p'>Expert in</span>
                      {post.skills.slice(0, 3).map((skill) => (
                        <p style={{ cursor: 'pointer' }} className="my_border small rounded m-1 p-1 d-block">{skill}</p>
                      ))}

                      <hr />

                      <button
                        onClick={() => { navigate(`/posts/${post?._id}`) }}
                        className="btn btn-outline-primary btn-rounded waves-effect w-md waves-light p-1 mx-1"
                        role="button">Profile
                      </button>

                      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Link to='/profile'>
                          <a href="#link"
                            className="btn btn-outline-secondary btn-rounded waves-effect w-md waves-light p-1 mx-1"
                            onClick={() => setCurrentId(post._id)}
                            role="button">Update</a>
                        </Link>
                      )}

                      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <a href="#link"
                          className="btn btn-outline-danger btn-rounded waves-effect w-md waves-light p-1 mx-1"
                          onClick={() => dispatch(deletePost(post._id))}
                          role="button">Delete
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    )



  )
}

export default MyProfile