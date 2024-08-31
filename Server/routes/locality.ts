import express from 'express'
import getallLocalities from '../controller/locality'
const router = express.Router()

router.get('/get', getallLocalities)

export default router