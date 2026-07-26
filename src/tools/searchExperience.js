import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function searchExperience(keyword) {
  try {
    if (!keyword) {
      return {
        success: false,
        message: "Please provide a keyword to search.",
      };
    }

    const profilePath = path.join(__dirname, "..", "data", "profile.json");

    const profile = JSON.parse(fs.readFileSync(profilePath, "utf8"));

    const query = keyword.toLowerCase();

    const matchedProjects = profile.projects.filter((project) =>
      JSON.stringify(project).toLowerCase().includes(query),
    );

    const matchedSkills = [];

    Object.entries(profile.skills).forEach(([category, skills]) => {
      skills.forEach((skill) => {
        if (skill.toLowerCase().includes(query)) {
          matchedSkills.push({
            category,
            skill,
          });
        }
      });
    });

    if (
      matchedProjects.length === 0 &&
      matchedSkills.length === 0 &&
      !profile.personal.summary.toLowerCase().includes(query)
    ) {
      return {
        success: false,
        message: `No experience found for "${keyword}".`,
      };
    }

    return {
      success: true,
      keyword,
      data: {
        experience: profile.personal.experience,
        summary: profile.personal.summary,
        matchedSkills,
        matchedProjects,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to search experience.",
      error: error.message,
    };
  }
}

export default searchExperience;
