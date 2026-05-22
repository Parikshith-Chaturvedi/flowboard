import express from "express";
import { createServer } from "http";
import cors from "cors";

const PORT = process.env["PORT"] ?? 4000;
const CORS_ORIGIN = process.env["CORS_ORIGIN"] ?? "http://localhost:3000";

const app = express();
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));

const httpServer = createServer(app);
httpServer.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
