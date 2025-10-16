import express from 'express';
import setupMiddlewares from './middleware/main.js';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobs.route.js'
const app= express();
setupMiddlewares(app);

app.use(cors());
app.use('/api/auth', authRoutes);
app.use('api/jobs',jobRoutes);

app.get('/',(req,res)=>{
    res.json({message:"Api job-get online"})
});

export default app;