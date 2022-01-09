const express = require('express');
const bodyparser = require('body-parser');
const user = require('./Banco de Dados/Usuarios')
const {uuid} = require ('uuidv4');
const cors = require('cors')
const jwt = require("jsonwebtoken");

//---
const JWTSecret ="danapamendanmenapa"
const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

function auth(req,res,next){
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const bearer = authToken.split(' ');
        const token = bearer[1];
        jwt.verify(token,JWTSecret,(err,data)=>{
            if(err){
                res.status(401);
                res.json({err:"token invalido"});
            }else{
               req.token = token;
               req.loggedUser={id: data.id, email: data.email};
               next();
            }
        })
        console.log(bearer);
    }else{
        res.status(401);
        res.json({err:"token invalido"})
    }
}

app.get("/auth",auth,(req,res)=>{
    var userLoggeddata = req.loggedUser;
            res.json({usuario: userLoggeddata})
            res.statusCode = 200;
        
})
//Listar Usuarios
app.get("/users",(req,res)=>{
    res.json({user});
    res.Status(200);
    
})

//Criar Usuario
app.post("/user",(req,res)=>{
    var {name,email,password} = req.body;
    let id = uuid();

    if(name != "" && email !="" && password != ""){
        
        user.users.push({
            id,
            email,
            name,
            password
        });
        res.sendStatus(200);
    }
    else{
        res.json({err:"Todos os campos devem estar preenchedos."});
        res.sendStatus(400);
        
    }
    
});

//Login
app.post("/login",(req,res)=>{
    var {email,password} = req.body;

    var useremail = user.users.find(g => g.email == email);
    var userpassword = user.users.find(g => g.password == password);
    

   if(useremail != undefined){

        if(userpassword != undefined){
          
            jwt.sign({id: useremail.id,email: useremail.email},JWTSecret,{expiresIn:'1h'},(err,token)=>{
                if(err){
                    
                    res.Status(400);
                    res.json({err:"Falha na autenticaçao."})
                }else{
                    res.json({Token: token, usuario:useremail.email});
                    res.Status(200);
                    
                }
            })
        }
        else{
            res.Status(400);
            res.json({err:"Senha Invalida."})
        }
    }
   else{
        res.Status(400);
        res.json({err:"Email Invalido."})
    }
   
})



//Ligando o Servidor
app.listen(8001,()=>{
    console.log("Servidor Rodando")
});