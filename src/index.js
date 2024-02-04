import express from "express";
import cors from "cors";
import { LoginHandler } from "./handler/LoginHandler.js";
import { SignUpHandler } from "./handler/SignUpHandler.js";
import { AllItemsHandler } from "./handler/AllItemsHandler.js";
import { DetailsHandler } from "./handler/DetailsHandler.js";

const app = express();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async (req, res) => {
    const data = req.body;
    let response = await LoginHandler(data);
    if (response.email != undefined) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ message: "Invalid Email Or Password" });
    }
});

app.post("/signup", async (req, res) => {
    const data = req.body;
    const response = await SignUpHandler(data);
    if (Object.keys(response).length == 3) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ message: "Email Already Exists" });
    }
});

app.get("/allItems", async (req, res) => {
    const data = await AllItemsHandler();
    res.json(data);
});

app.post("/details", async (req, res) => {
    const data = req.body;
    const response = await DetailsHandler(data);
    if (Object.keys(response).length == 2) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

app.post("/upload", async (req, res) => {
    const data = req.body;
    const response = await UploadHandler(data);
    res.json(response);
});

app.listen(3000, () => {
    console.log("Listening on port " + 3000);
});
