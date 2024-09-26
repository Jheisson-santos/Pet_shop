import db from "../db.js";

const Schema = db.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true
    },
    telefone: {
        type: [Number],
        required: true
    }
})

const Cliente = db.model("Cliente", clienteSchema);
export default Cliente