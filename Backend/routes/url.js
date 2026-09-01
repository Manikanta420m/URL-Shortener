import express from 'express';
import Url from '../models/url.js';
import {nanoid} from 'nanoid';

const router = express.Router();

router.post("/shorten",async(req,res)=>{
   try{
     const {originalUrl} = req.body
   }
   catch(e){
      console.log(e);
      res.status(500).json({
         error : "Server Error"
      });
   }
});