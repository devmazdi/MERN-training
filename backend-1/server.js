import  express from "express";
import dotenv from "dotenv"
import dbCon from "./lib/dbCon.js";
const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;
// connect db start server
dbCon().then(con => {
    if(con){
        app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
    }
})