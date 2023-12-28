import express from 'express'

const router = express.Router();

router.get('/create-user',registerController)


export default router