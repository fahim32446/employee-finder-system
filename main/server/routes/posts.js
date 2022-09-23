import express from 'express'
import {getPostsSearch, getPostsByCreator, getPostsByTags, getPost, getPosts, createPost, updatePost, deletePost, sendMessage } from '../controllers/posts.js';


import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/my-profile/:name', getPostsByCreator);
router.get('/filter/:tag', getPostsByTags);
router.get('/', getPosts)
router.get('/search', getPostsSearch)
router.get('/:id', getPost)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

router.post('/message', sendMessage);

// router.get('/', getPosts)
// router.post('/',  createPost)
// router.patch('/:id',  updatePost);
// router.delete('/:id',  deletePost);

export default router;