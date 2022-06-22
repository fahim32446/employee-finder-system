import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/SingUp'
import Home from './component/Home'
import About from './component/About'
import Test from './component/Test';
import Test2 from './component/Test2';

import PostDetails from './component/PostDetails';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './component/Profile';
import MyProfile from './component/MyProfile';
import SkillFilter from './component/SkillFilter';

function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (

    <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Navigate to="/posts" />} />

        <Route path="/posts" exact element={<Home  setCurrentId={setCurrentId} />} />

        <Route  path="/posts/search" exact element={<Home />} />

        <Route  path="/filter/:skill" exact element={<SkillFilter />} />

        <Route path="/posts/:id" exact element={<About />} />
        
        <Route path="/message/:id" exact element={<About />} />

        <Route exact path='/login' element={<Login />} />

        <Route exact path='/my-profile' element={<MyProfile setCurrentId={setCurrentId} />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/profile' element={<Profile currentId={currentId} setCurrentId={setCurrentId} />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path='/test2' element={<Test2 />} />
      </Routes>

    </Router>
  );
}

export default App;
