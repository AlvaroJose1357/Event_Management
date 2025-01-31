import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/DB";
import routerEvents from "./routes/EventRouter";
import routerUsers from "./routes/UserRouter";
import { ORIGIN } from "./config/Process";
const app = express();
// conexion a la base de datos
connectDB();

//middleware para aceptar json
app.use(express.json());
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/events", routerEvents);
app.use("/api/users", routerUsers);

app.get("/api", (req, res) => {
  res.json({ message: "API con express" });
});

export default app;
