const express = require('express');

const userRouter = require('./users.routes')
const categoryRouter = require('./category.routes')
const adminRouter = require('./admin.routes')

const router = express.Router();

router.use('/users', userRouter);
router.use('/category', categoryRouter);
router.use('/admin', adminRouter);


module.exports = router;