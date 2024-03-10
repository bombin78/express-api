const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');
const likeRouter = require('./likeRouter');
// https://www.npmjs.com/package/multer
// https://github.com/expressjs/multer/blob/master/doc/README-ru.md
const multer = require('multer');

const uploadDestination = 'uploads';

// Показываем, где хранить файлы
const storage = multer.diskStorage({
	destination: uploadDestination,
	filename: function(req, file, cb) {
		cb(null, file.originalName)
	}
});

const uploads = multer({storage});

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/likes', likeRouter);

module.exports = router;
