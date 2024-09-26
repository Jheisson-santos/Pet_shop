import db from "../db.js";

const Schema = db.Schema;

const agendamentoSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    }
})

const Agendamento = db.model("Agendamento", agendamentoSchema);
export default Agendamento