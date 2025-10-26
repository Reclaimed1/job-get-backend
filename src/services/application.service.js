import Application  from "../model/application.model";
import Jobs from "../model/jobs.model";
export const applyJob=async(applyData)=>{
    const checkJob=await Jobs.findById(applyData.jobId);
    if(!checkJob){
        return ("Job doesnt exist");
    }
    const alreadyApplied = checkJob.applicants.some((app) => app.workerId.toString() === applyData.workerId.toString());
  if (alreadyApplied) {
    throw new Error("You already applied for this job");
  }
    try {
        const newAppli=await Application.create({
            jobId:applyData.jobId,
            workerId:applyData.workerId,
            employerId:applyData.employerId,
            coverLetter:applyData.coverLetter,
        })
    checkJob.applicants.push({
      workerId: applyData.workerId
    });
    await checkJob.save();
    const populatedJob = await Jobs.findById(checkJob._id)
      .populate("applicants.workerId", "name email phone skills").exec();
        return {populatedJob, newAppli};
    } catch (error) {
        console.log(error);
        return ("Unable to apply for job")
    }
}
export const deleteAppl=async(appliId)=>{
    try {
    const appli=await Application.findByIdAndDelete(appliId);
    return (appli)
    } catch (error) {
        console.log(error);
        return ("Delete unssuccesful"); 
    }
}