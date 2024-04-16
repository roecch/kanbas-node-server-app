import express from "express";
import mongoose from "mongoose";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import cors from "cors";

mongoose.connect("mongodb+srv://chungmo:kFeOCYVEMyDV3HaV@cluster0.6ikctr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {dbName: 'kanbas'});

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);