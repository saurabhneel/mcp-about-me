import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getProfile() {
  try {
    const profilePath = path.join(__dirname, "..", "data", "profile.json");

    const profile = JSON.parse(fs.readFileSync(profilePath, "utf8"));

    return {
      success: true,
      data: profile,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to load profile.",
      error: error.message,
    };
  }
}

export default getProfile;
