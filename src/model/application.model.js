import { Schema,model} from 'mongoose'

const appSchema=new Schema({

    jobId:{type:Schema.Types.ObjectId, ref:"Job", required:true},
    workerId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    employerId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    status:{type:String,enum:["applied","shortlisted","completed","rejected"],default:"applied"},
    coverLetter:{type:String},
   appliedAt:{type:Date,default:Date.now}
});

const Application=model('Application',appSchema);
export default Application;