import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./db";

const PORT = process.env.PORT || 4000;
const handelListening = () => console.log(`✅ Listening on http://localhost:${PORT}`);

app.listen(PORT, handelListening);
