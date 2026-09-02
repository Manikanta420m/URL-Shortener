import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './routes/url.js';

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors({
  origin : process.env.FRONTEND_URL,
  methods : ['POST','GET'] 
}));

app.use('/',urlRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   console.log('MongoDB is connected Successfully');
   app.listen(process.env.PORT,()=>{
     console.log(`port is running at ${process.env.PORT}`);
   });
})
.catch((e)=>{
  console.log("Error while connecting to mongoDB",e);
});

