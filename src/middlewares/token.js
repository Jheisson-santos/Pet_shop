import jwt from "../service/jwt.js";

function check_token(req, res, next) {
    const auth_header = req.headers["authorization"];
    const token = auth_header && auth_header.split(" ")[1];
    console.log(token);
    if (!token) {
      return res.status(401).json("Acesso negado (usuário não identificado)");
    }
  
    try {
      req.user = jwt.verifyAccessToken(token);
    } catch (error) {
      console.log(error)
      res.status(401).json("Token inválido");
    }
  
    next();
  }
  
  export default check_token; 