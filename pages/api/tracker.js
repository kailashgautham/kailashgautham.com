import { Redis } from "@upstash/redis";
import crypto from "crypto";

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const CREDENTIAL_HASH =
  "8781629218e92db8cd5029c09d5d17586fa1343a7974f11f9fd30f01e90cd9a8";
const KV_KEY = "hft-prep-entries";

function checkAuth(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Basic ")) return false;
  const decoded = Buffer.from(auth.slice(6), "base64").toString();
  const hash = crypto.createHash("sha256").update(decoded).digest("hex");
  return hash === CREDENTIAL_HASH;
}

export default async function handler(req, res) {
  if (!checkAuth(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    const data = await redis.get(KV_KEY);
    return res.status(200).json(data || {});
  }

  if (req.method === "POST") {
    await redis.set(KV_KEY, req.body);
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
