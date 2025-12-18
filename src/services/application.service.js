import Application  from "../model/application.model.js";
import Jobs from "../model/jobs.model.js";
export const applyJob=async(applyData)=>{
    const checkJob=await Jobs.findById(applyData.jobId);
    if(!checkJob){
        return ("Job doesnt exist");
    }
  //   const alreadyApplied = checkJob.applicants.some((app) => app.applicant.toString() === applyData.workerId.id.toString());
  // if (alreadyApplied) {
  //   throw new Error("You already applied for this job");
  // }
    try {
        const newAppli=await Application.create({
            jobId:applyData.jobId,
            workerId:applyData.workerId,
            employerId:applyData.employerId,
            coverLetter:applyData.coverLetter,
        })
    checkJob.applicants.push({
      applicant: applyData.workerId
    });
    await checkJob.save();
    // const populatedJob = await Jobs.findById(checkJob._id)
    //   .populate("applicants.aplicant", "name email phone skills").exec();
        return {newAppli};
    } catch (error) {
        console.log(error);
        return ("Unable to apply for job")
    }
}
export const getUserApp=async(workerId)=>{
  try {
     const user=await Application.find({workerId:workerId}).populate({ path: "employerId", select: "-password" }).populate({path:"jobId"});
     return user;
  } catch (error) {
    throw error;
  }
}
export const deleteAppl=async(appliId)=>{
    try {
    const appli=await Application.findByIdAndDelete(appliId);
    return (appli)
    } catch (error) {
        throw error
    }
}