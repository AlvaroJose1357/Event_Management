import "dotenv/config";

export const { PORT = 3000, MONGODB_URL, JWT_SECRET, ORIGIN } = process.env;
