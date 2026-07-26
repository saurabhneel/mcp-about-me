import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getProjects(projectName = null) {
  try {
    const profilePath = path.join(__dirname, "..", "data", "profile.json");

    const profile = JSON.parse(fs.readFileSync(profilePath, "utf8"));

    const projects = profile.projects || [];

    if (!projectName) {
      return {
        success: true,
        count: projects.length,
        data: projects,
      };
    }

    const project = projects.find((project) =>
      project.name.toLowerCase().includes(projectName.toLowerCase()),
    );

    if (!project) {
      return {
        success: false,
        message: `Project "${projectName}" not found.`,
      };
    }

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to load projects.",
      error: error.message,
    };
  }
}

export default getProjects;
