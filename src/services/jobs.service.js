import Jobs from '../model/jobs.model.js';
export const createJob=async(jobData)=>{
    try {
        const newJob=await Jobs.create({
         employerId:jobData.employerId,
         title:jobData.title,
         description:jobData.description,
         category:jobData.category,
         city:jobData.city,
         payRate:jobData.payRate,
         jobType:jobData.jobType,
        })
        await newJob.save();
        return newJob;
    } catch (error) {
        console.log(error);
        throw new Error("Job creation unssuccessful")
    }
}
export const getAllJobs=async()=>{
    try {
        const jobs=await Jobs.find().populate("employerId").select("-password");
        return jobs;
    } catch (error) {
        console.log(error);
        throw new Error("Error getting all jobs");
    }
}
export const updateJob=async(employerId,jobId,updateData)=>{
    try {
        const job=await Jobs.findById(jobId);
    if(!job){
        console.log("Job doesnt exist");
        throw new Error("No such job exist")
    }
    if(job.employerId.tostring()!==employerId.tostring()){
        console.log("not authorized");
        return ("You are not authorized to edit this job");
    }
    Object.assign(job, updateData);
    await job.save();
    return job;
    } catch (error) {
        console.log(error);
        return ("Error updating job");
    }
    
}
export const deleteJob=async(jobId)=>{
    try {
        const job=await Jobs.findByIdAndDelete(jobId);
        return job;
    } catch (error) {
        console.log(error);
        return ("Unable to delete job post");
    }
}
export const getUserJob=async(userId)=>{
    try {
        const job=await Jobs.find({employerId:userId}).populate("applicants.applicant","name email");
        return job;
    } catch (error) {
        throw error;
    }
}
export const applyJob=async(id,workerId)=>{
    try {
    const job = await Jobs.findById(id);
    if(!job){throw new Error ("Job not found")};
    if (job.applicants.some(a => a.applicant.toString() === workerId)) {
 return("You already applied for this job");
}  
     job.applicants.push({ applicant: workerId });
    await job.save();

    return job;
    } catch (error) {
        throw error
    }
}