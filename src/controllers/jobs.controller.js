import * as jobServices from '../services/jobs.service.js';

export const createJob=async(req,res)=>{
    try {
        const create=await jobServices.createJob(req.body);
        res.status(200).json(create)
    } catch (error) {
        if(error.message==="Job creation unssuccesful"){
            return res.status(400).json({error:error.message});
        }
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
  

}
export const getAllJobs=async(req,res)=>{
    const jobs=await jobServices.getAllJobs();
    if(jobs==="Error getting all jobs"){
        return res.status(400).json(jobs);
    }
    res.status(200).json(jobs);
}
export const updateJob=async(req,res)=>{
    const{employerId}=req.user;
    const{jobId,description,payRate,jobType,deadline}=req.body
    const updateData={description,payRate,jobType,deadline};
    const job=await jobServices.updateJob(employerId,jobId,updateData);
    if(job==="Error updating job"|| job==="No such job exist"|| job==="You are not authorized to edit this job"){
        return res.status(400).json({error:job});
    }
    res.status(200).json(job);
}