import User from "../models/usuario.js"
import jwt from "../service/jwt.js"
import bcrypt from "bcrypt"
const store = async(req, res)=>{
    try{
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(err){
        res.status(400).json(err)
    }
}
const login = async (req,res)=>{
    try {
        const user = await User.findOne({
          email: req.body.email,
        }).exec();
        if (user && (await bcrypt.compare(req.body.senha, user.senha))) {
          const token = jwt.generateAccessToken({
            tipo: user.tipo,
            email: user.email,
            _id: user._id,
          });
          res.json({token,});
        } else {
    
          res.status(404).json("Email ou senha inválidos");
        }
    
      } catch (error) {
        console.log(error)
        res.status(400).send(error);
      }
}

const singin = async (req,res)=>{
    try {
        const user = await User.create({
          email: req.body.email,
          senha: req.body.senha,
        });
    
        const token = jwt.generateAccessToken({
          tipo: user.tipo,
          email: user.email,
          _id: user._id,
        });
        res.status(201).json({
          token,
        });
    
      } catch (error) {
        console.log(error)
        res.status(400).send(error);
      }
}

const index = async (req, res)=>{
    try{
        const user = await User.find()
        res.status(200).json(user)
    }catch(err){
        res.status(404).json(err)
    }
}

const show = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(404).json(err)
    }
}

const destroy = async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(404).json(err)
    }
}

const update = async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(user)
    }catch(err){
        res.status(404).json(err)
    }
}

export default {store, login, singin, index, show, destroy, update}