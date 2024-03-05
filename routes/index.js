const express = require('express');
const router = express.Router();
// https://www.npmjs.com/package/multer
// https://github.com/expressjs/multer/blob/master/doc/README-ru.md
const multer = require('multer ');

const uploadDestination = 'uploads';

// Показываем, где хранить файлы
const storage = multer.diskStorage({
	destination: uploadDestination,
	filename: function(req, file, cb) {
		cb(null, file.originalName)
	}
});

const uploads = multer({storage})

router.get('/register', (req, res) => {
	res.send('register');
});

module.exports = router;
