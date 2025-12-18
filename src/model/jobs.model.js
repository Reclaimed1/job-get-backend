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
    applicants:[{
        applicant:{type:Schema.Types.ObjectId, ref:"User"},
    }],
});

const Jobs=model("Job",jobsSchema);

export default Jobs;