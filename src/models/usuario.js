import db from "../db.js"
import bcrypt from 'bcrypt'
const Schema = db.Schema

const usuarioSchema = new Schema ({
    nome:{
        type: String,
        requerid: true
    },
    email:{
        type: String,
        requerid: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        }
    }
},
    senha:{
        type: String,
        minlength: 8,
        requerid: true
    },
    endereco: {
        type: Object,
        requerid: true
    },
    tipo:{
        type: String,
        enum: ['admin', 'user', 'recept'],
        default: 'user',
        requerid: true
    }
})

usuarioSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})

usuarioSchema.methods.senhaCorreta = async function(senha){
    return await bcrypt.compare(senha, this.senha)
}

const Usuario = db.model('Usuario', usuarioSchema)

export default Usuario



