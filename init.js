import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 4000;
const handelListening = () => console.log(`✅ Listening on http://localhost:${PORT}`);

app.listen(PORT, handelListening);
