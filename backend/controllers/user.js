const UserModel = require('../models/user')
const CompanyModel = require('../models/company')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.createUserWithCompany = async (data) => {

    try {
        const {
            name,
            email,
            username,
            password,
            role,
            companyName,
            adress,
            phone,
        } = data;
    
        const findEmail = UserModel.find({email: email, companyName: companyName});
    
        if (findEmail.length >= 1) {
            
            return({message: "Email is already registered with this company"})
    
        }else{
    
            const hash = await bcrypt.hash(password, 10);
    
            const newUser = new UserModel({
                _id: new mongoose.Types.ObjectId(),
                name,
                email,
                username,
                password: hash,
                role,
                companyName,
                phone
            })
    
            const newCompany = new CompanyModel({
                _id: new mongoose.Types.ObjectId(),
                companyName,
                adress,
                phone,
                email,
                userPropertyId: newUser._id
            });
    
            newUser.companyId = newCompany._id;
    
            const resultUser = await newUser.save();
            const resultCompany = await newCompany.save();
    
            if (!resultUser) {
                return({message: "Unable to create user"})
            }
    
        
            if (!resultCompany) {
                return({message: "Unable to create company"})
            }
    
            return({message: "Successful", dataUser: resultUser, dataCompany: resultCompany});
    
        }
    } catch (error) {
        console.log("Error creating user and company")
        console.log(error)

        return({message: "Some error creating user or company"})
    }

}

exports.login = async(data) => {
    const {
        email,
        password,
        companyId
    } = data;

    try {
        
        const user = await UserModel.find({email: email, companyId: companyId});

        if (user.length < 1) {
            return({message: "Email does not exist or incorrect company"})
        }

        bcrypt.compare(password, user.password,  async(err, result) => {
            if(err){
                return({message: "Auth failed"})
            }

            return({message: "Logged in successfully", dataUser: user})
        })

    } catch (error) {
        console.log("Error in log in")
        console.log(error)

        return({message: "Error with log in"})
    }

}