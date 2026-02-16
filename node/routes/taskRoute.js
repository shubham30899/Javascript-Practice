const express = require('express');
const ctrl = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', ctrl.list);
router.post('/tasks', ctrl.create);
module.exports = router;
