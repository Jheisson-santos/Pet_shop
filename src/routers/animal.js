import express from "express"
import animal from "../controllers/animal.js"
const router = express.Router()

router.get('/', animal.index)
router.get('/:id', animal.show)
router.post('/', animal.store)
router.put('/:id', animal.update)
router.delete('/:id', animal.destroy)

export default router