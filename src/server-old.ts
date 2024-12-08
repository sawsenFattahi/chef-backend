import express  from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) {
    console.log("PORT is not defined"); 
    process.exit(1);
}

const PORT = parseInt(process.env.PORT || "4000");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(helmet());
app.use(cors());

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})