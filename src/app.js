const express = require("express");
require("./db/conn")
const Register = require("./models/registers")
const app = express();
const path = require("path");
const hbs = require("hbs")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public")
const template_path = path.join(__dirname , "../templates/views")
const partial_path = path.join(__dirname , "../templates/partials")


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set("view engine" , "hbs");
app.set("views" , template_path);
hbs.registerPartials(partial_path)


app.get('/' ,(req , res)=>{
    res.render("index");
    // res.render(static_path);
})
app.get("/register" , (req,res) =>{
    res.render("register");
})

app.post("/register" , async (req,res) =>{
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if(password === cpassword){
            const registerData = new Register({
                fullName : req.body.fullName , 
                username : req.body.username ,
                email : req.body.email ,
                phoneNum : req.body.phoneNum,
                password : password ,
                confirmPassword : cpassword,
                gender : req.body.gender
            })

            const registerD = await registerData.save();
            res.status(201).render(index);
        }else{
            res.send("passwords does not match")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})



app.listen(port , ()=>{
    console.log(`Express app is running on http://localhost:${port}`);
})