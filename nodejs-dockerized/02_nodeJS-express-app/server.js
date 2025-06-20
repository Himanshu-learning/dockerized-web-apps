import express from "express"
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
   res.json({ message: "App is running on docker container on image version 2 re-written on seconf attempt now version v3"});
});

app.listen(PORT, () => {
   console.log(`App running on ${PORT}`);
})
