import axios from "axios"

const cep = async (req, res, next) => {
    req.body.cep = req.body.cep.replace("-","")
    console.log(req.body.cep);
    if(req.body.cep != undefined && req.body.cep.length == 8 && !isNaN(Number(req.body.cep))){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then(response => {
            req.body.endereco = response.data
            delete req.body.cep
            next()
        })
} else {
    res.status(400).json("CEP inválido")
}
}

export default cep