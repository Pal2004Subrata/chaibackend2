// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({
    path: "./.env"
})

connectDB();









/*
////// This is one approach to connect database......
import express from "express";
const app = express();
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Application is listing on port ${process.env.PORT}...`);
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw err
    }
})()

*/