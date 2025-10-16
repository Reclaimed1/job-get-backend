import {Schema, model} from 'mongoose';

const userSchema= new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, enum:["worker","employer"], default:"worker"},
    password:{type:String,required:true},
    phone:{type:String, required:true},
    location:{
        city:{type:String},
        country:{type:String}
    },
    skills:[
        {
            skillType:{type:String}
        }
    ],
    bio:{type:String},
    rating:{type:Number, min:0, max:5},
    profileImage:{type:String},
    createAt:{type:Date,default:Date.now}
});

const User=model('User', userSchema);

export default User;