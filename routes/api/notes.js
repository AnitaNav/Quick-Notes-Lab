const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.post('/', notesCtrl.createdAt);
router.get('/', notesCtrl.index);

module.exports = router;