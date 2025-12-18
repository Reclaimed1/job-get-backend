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
    try {
         const jobs=await jobServices.getAllJobs();
          res.status(200).json(jobs);
    } catch (error) {
         if(error.message==="Error getting all jobs"){
       return res.status(400).json(jobs);
    }
    }
     
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
export const deleteJob=async(req,res)=>{
    const id=req.params.id;
    const job=await jobServices.deleteJob(id);
    if(job==="Unable to delete job post"){
        return res.status(400).json({error:job})
    }
    res.status(200).json({message:"Deleted successfuly"});
}
export const getUserJob=async(req,res)=>{
    try {
        const id=req.params.id;
        const user=await jobServices.getUserJob(id);
        if(!user){
            return res.status(400).json({message:"No job found for the user"});
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const applyForJob=async(req,res)=>{
    try {
        const id=req.id.params;
        console.log(id);
        const workerId=req.body;
        const apply=await jobServices.applyJob(id,workerId);
        if(apply==="You already applied for this job"){
            return res.status(400).json({message:apply})
        }
        res.status(200).json({apply});
    } catch (error) {
         console.error("Error apllying for job:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}