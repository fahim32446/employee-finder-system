import React, { useEffect, useState } from 'react'
import '../asset/Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { deletePost, getPosts, getPostsSearch, getPostsByTags } from '../actions/posts'
import Paginate from './Paginate';
import Loading from './Loading';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId }) => {
  const navigate = useNavigate();
  const { posts, isLoading } = useSelector((state) => state.posts);



  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [search, setSearch] = useState([]);

  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');


  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  }

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsSearch({ search }));
      navigate(`../posts/search?searchQuery=${search || 'none'}`);
    } else {
      navigate('../')
    }
  }


  const searchTag = (skill) => {
    dispatch(getPostsByTags(skill));
    navigate(`../filter/${skill}`);
  }



  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);

  if (!posts.length && !isLoading) return 'No posts';

  return (



    <div className="container">
      <div className="row py-3 mt-4 ">
        <div className="col-lg-8 col-md-8 col-sm-12">
          {isLoading ? <Loading /> : (
            <div className="row">

              {posts.map((post, index) => (

                <div key={index} className="col-lg-4 col-md-6">

                  <div className="card card_hover user-card">

                    <div className="ribbon-wrapper">
                      <div className="ribbon">{post.Job_type}</div>
                    </div>

                    <div className="card-block rounded ">
                      <div onClick={() => { navigate(`/posts/${post?._id}`) }} className="after_hr">
                        <div className="user-image">
                          <img src={post.file} className="img-radius" alt="User-Profile-Image" />
                        </div>
                        <h6 className="f-w-600">{post.name}</h6>
                        <p className="text-muted">{post.jobtitle}</p>
                        <p className="text-muted">{`Demand: ${post.Salary ? post.Salary : "0.00"} ৳`}</p>
                        <hr />
                      </div>
                      <span className='my_p'>Expert in</span>
                      {post.skills.slice(0, 3).map((skill, index) => (
                        <p key={index} style={{ cursor: 'pointer' }} onClick={() => { searchTag(skill) }} className="my_border small rounded m-1 p-1 d-block">{skill}</p>
                      ))}

                    </div>
                  </div>

                </div>

              ))}
            </div>
            
          )}
          {posts.length ? <Paginate page={page} /> : ''}
         
        </div>


        <div className="col-lg-4 col-md-4 col-sm-12">

          <h4>Find Here</h4>
          
            <div className="input-group chip mb-3">
              <input type="text" className="form-control me-1"
                placeholder="Search Here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}

              />

              <div className="input-group-append">
                <button style={{ backgroundColor: '#ebb134', color: 'white' }} onClick={searchPost} className="btn" type="submit">Search</button>
              </div>
            </div>

        

          <h5>Browser By Type</h5>

          <ul className="list-group">
            <li onClick={(e) => { searchTag("Full-Time") }} className="list-group-item">Full-Time </li>
            <li onClick={(e) => { searchTag("Part-Time") }} className="list-group-item">Part-Time</li>
          </ul>

          <h5 className="mt-4">Browser By Skills</h5>

          <ul className="list-group">
            <li onClick={(e) => { searchTag('JavaScript') }} className="list-group-item">JavaScript </li>
            <li onClick={(e) => { searchTag('ReactJs') }} className="list-group-item">ReactJs</li>
            <li onClick={(e) => { searchTag('NodeJs') }} className="list-group-item">NodeJs </li>
            <li onClick={(e) => { searchTag('ExpressJs') }} className="list-group-item">ExpressJs</li>
            <li onClick={(e) => { searchTag('Mongoose') }} className="list-group-item">Mongoose</li>
            <li onClick={(e) => { searchTag('Java') }} className="list-group-item">Java</li>
            <li onClick={(e) => { searchTag('C#') }} className="list-group-item">C#</li>
            <li onClick={(e) => { searchTag('Php') }} className="list-group-item">Php</li>
            <li onClick={(e) => { searchTag('Laravel') }} className="list-group-item">Laravel</li>
            <li onClick={(e) => { searchTag('Wordpress') }} className="list-group-item">Wordpress </li>
            <li onClick={(e) => { searchTag('Python') }} className="list-group-item">Python</li>
            <li onClick={(e) => { searchTag('Django') }} className="list-group-item">Django</li>
            <li onClick={(e) => { searchTag('CCNA') }} className="list-group-item">CCNA Networking</li>
          </ul>

        </div>

      </div>
    </div>




  )
}

export default Home