import Review from "../model/review.model";

const createReview=async(reviewData)=>{
    try {
        const review=await Review.create({
            
        })
    } catch (error) {
        console.log(error);
        return ("Unable to create review");
    }
}