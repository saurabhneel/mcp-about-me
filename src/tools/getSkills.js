import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getSkills(category = null) {
  try {
    const profilePath = path.join(__dirname, "..", "data", "profile.json");

    const profile = JSON.parse(fs.readFileSync(profilePath, "utf8"));

    const skills = profile.skills;

    if (!category) {
      return {
        success: true,
        data: skills,
      };
    }

    const key = category.toLowerCase();

    if (!skills[key]) {
      return {
        success: false,
        message: `Skill category '${category}' not found.`,
      };
    }

    return {
      success: true,
      data: {
        [key]: skills[key],
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to load skills.",
      error: error.message,
    };
  }
}

export default getSkills;
