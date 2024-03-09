const express = require('express');
const router = express.Router();
const {
	UserController,
	PostsController,
	CommentsController,
	LikesController,
} = require("../controllers");
// https://www.npmjs.com/package/multer
// https://github.com/expressjs/multer/blob/master/doc/README-ru.md
const multer = require('multer');
const authenticateToken = require('../middleware/auth');

const uploadDestination = 'uploads';

// Показываем, где хранить файлы
const storage = multer.diskStorage({
	destination: uploadDestination,
	filename: function(req, file, cb) {
		cb(null, file.originalName)
	}
});

const uploads = multer({storage})

// Routes of user
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/current', authenticateToken, UserController.current);
router.get('/users/:id', authenticateToken, UserController.getUserById);
router.put('/users/:id', authenticateToken, UserController.updateUser);

// Routes of posts
router.post('/posts', authenticateToken, PostsController.createPost);
router.get('/posts', authenticateToken, PostsController.getAllPosts);
router.get('/posts/:id', authenticateToken, PostsController.getPostById);
router.delete('/posts/:id', authenticateToken, PostsController.deletePost);

// Routes of comments
router.post('/comments', authenticateToken, CommentsController.createComment);
router.delete('/comments/:id', authenticateToken, CommentsController.deleteComment);

// Routes of likes
router.post('/likes', authenticateToken, LikesController.likePost);
router.delete('/likes/:id', authenticateToken, LikesController.unlikePost);

module.exports = router;
