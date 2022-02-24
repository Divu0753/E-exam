
const express=require("express")
const sessioncontroller=require("./controller/session-controller")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/login",sessioncontroller.login)

app.get("/",function(req,res){
    res.write("welcome")
    res.end()
})


app.listen(3500,function(){
     console.log("server started on 3500")
})