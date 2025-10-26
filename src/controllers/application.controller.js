import * as applicationService from '../services/application.service.js';

export const applyJob=async(req,res)=>{
   const {workerId}=req.user;
   const applyData={workerId,...req.body};
    const apply=await applicationService.applyJob(applyData);
    if(apply==="unable to apply for job"){
        return res.status(400).json({error:apply})
    }
    res.status(200).json({message:"Job applied successfully "+apply});
}