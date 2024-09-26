import jwt from "jsonwebtoken"

const generateAccessToken = (user) =>
    jwt.sign(user, process.env.TOKEN, { expiresIn: "1d" });

  const verifyAccessToken = (token) =>
    jwt.verify(token, process.env.TOKEN);
  
  export default {
    generateAccessToken,
    verifyAccessToken,
  };