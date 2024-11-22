const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../Controllers/BlogController');
const { blogValidation } = require('../Middlewares/BlogValidation');

const router = require('express').Router();
router.get('/all-blog', getAllBlogs);
router.get(`/all-blog/:id`, getBlogById);
router.post('/create-blog', blogValidation, createBlog);
router.put('/update-blog/:id', updateBlog);
router.delete('/delete-blog/:id', deleteBlog);

module.exports = router;