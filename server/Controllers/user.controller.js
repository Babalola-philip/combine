// import userModel from "../Models/user.model";

const userModel = require("../Models/user.model")

// const ListOfStudent = (req,res)=>{

// }

const listOfStudent =(req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
            }
        ]
    )
}

const register =(req,res)=>{
    
    let user = new userModel(req.body)
    user.save()
    .then((user)=>{
       console.log(user)
        res.send({message:"User saved", status: true})
        // console.log("Welcome")
    }).catch(()=>{
        console.log({message:"faied to Register"})
    })

   
  }

// const signin =(req,res)=>{
//     let {email, password} = req.body
   
//     userModel.findOne({email:email}).then((user)=>{
//         if(user){
//             console.log({message:"Login successfully", status:true})
//             console.log({message:"Login successfully", status:true})

//         }else{
//             console.log("Failed to sign in")
            
//         };
//     }).catch((err)=>{
//         console.log(err)
//     })

// }

const signin = async (req, res) => {
    const {email, password} =req.body;
    let user;

    try {
        user = await userModel.findOne({email: email});
    } catch (error) {
        return new Error
    }
    if(!user){
         res.status(404).json({message:"User not found"});
        console.log(error)
    }

    const correctedPasswords = bcrypt.comparesync(password, user.password)

    if(!correctedPasswords){
        res.status(400).json({message:"Incorrect password"});
        console.log({message:"Incorrect password"});
    }else{
        res.status(200).json({message:"Login successfully", status:true});
        console.log({message:"Login successfully", status:true})
    }
}

const dashboard = (req,res)=>{

    userModel.find().then((data)=>{
       res.send({data:data})
       console.log(data)
    })
}


module.exports ={listOfStudent, register,signin, dashboard}