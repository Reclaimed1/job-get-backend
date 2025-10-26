import {Schema,SchemaType,model} from 'mongoose'

const jobsSchema=new Schema({

    employerId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    city:{type:String, required:true},
    payRate:{type:Number, required:true},
    jobType:{type:String, enum:["full-time","part-time"], default:"full-time"},
    status:{type:String, enum:["open","in-progress","completed"], default:"open"},
    createAt:{type:Date,default:Date.now},
    deadline:{type:Date, required:true},
    applicants:[{
        applicant:{type:Schema.Types.ObjectId, ref:"user"},
    }],
});

const Jobs=model("Jobs",jobsSchema);

export default Jobs;