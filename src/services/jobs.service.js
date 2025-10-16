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
         deadline:jobData.deadline
        })
        await newJob.save();
        return newJob;
    } catch (error) {
        console.log(error);
        throw new Error("Job creation unssuccessful")
    }
}