import express from "express"
import "dotenv/config"
import Usuario from "./routers/usuario.js"
import Animal  from "./routers/animal.js"
import Agendamento  from "./routers/agendamento.js"
import Cliente from "./routers/cliente.js"
const app = express()

app.use(express.json())
app.use('/user', Usuario)
app.use('/animal', Animal)
app.use('/agendamento', Agendamento)
app.use('/cliente', Cliente)

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`))