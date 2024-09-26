import User from "../controllers/usuario.js"
import express from "express"
import token from "../middlewares/token.js"
import roles from "../middlewares/roles.js"
const router = express.Router()

router.get("/",token, roles(["admin", "recept", "user"]),User.index)
router.get("/:id",token, User.show)
router.post("/",token, roles(["admin", "recept"]), User.store)
router.put("/:id",token, User.update)
router.delete("/:id",token, User.destroy)
router.post("/login",User.login)
router.post("/singin",User.singin)

export default router