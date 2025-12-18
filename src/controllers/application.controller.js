import * as applicationService from '../services/application.service.js';

export const applyJob=async(req,res)=>{
   const workerId=req.params;
   const {jobId,employerId}=req.body
   const applyData={workerId,jobId,employerId};
    const apply=await applicationService.applyJob(applyData);
    if(apply==="unable to apply for job"){
        return res.status(400).json({error:apply})
    }
    res.status(200).json({message:"Job applied successfully "+apply});
}
export const getUserApp=async(req,res)=>{
   try {
    const id=req.params.id;
    const user=await applicationService.getUserApp(id);
    res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error})
    }
}

export const deleteAppl=async(req,res)=>{
    try {
        const appliId=req.params.id;
        const appli=await applicationService.deleteAppl(appliId);
        res.status(200).json({message:"Application deleted successfully",appli});
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error})
    }
}