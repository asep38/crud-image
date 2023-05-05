import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors());
app.use(express());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, () => console.log("server up and running..."));
