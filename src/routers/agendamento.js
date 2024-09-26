import express from "express"
import agendamento from "../controllers/agendamento.js"
const router = express.Router()

router.get('/', agendamento.index)
router.get('/:id', agendamento.show)
router.post('/', agendamento.store)
router.put('/:id', agendamento.update)
router.delete('/:id', agendamento.destroy)

export default router