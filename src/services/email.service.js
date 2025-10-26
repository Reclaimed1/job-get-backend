import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const transporter=nodemailer.createTransport({
    servcie: 'gmail',
    auth:{
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    },
});

export const welcomeMessage=async (to,name)=>{
    const mailOptions={
        from:"Job-Get",
        to,
        subject:"Welcome To Job-Get",
        text: `hi ${name}, welcome to Job-get we are excited to have you with us
        
        Best Regards,
        Job-Get`,
    };
};