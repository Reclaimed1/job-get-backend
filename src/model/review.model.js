import { Schema,model } from "mongoose";

const reviewSchema=new Schema({
    reviewerId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    revieweeId:{type:Schema.Types.ObjectId, ref:"User", required:true},
    jobId:{type:Schema.Types.ObjectId, ref:"Jobs", required:true},
    rating:{type:Number, min:1, max:5, required:true},
    comment:{type:String, required:true},
    createdAt:{type:Date, default:Date.now}
});
const Review=model("Review",reviewSchema);

export default Review;
