import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import getProfile from "./tools/getProfile.js";
import getSkills from "./tools/getSkills.js";
import getProjects from "./tools/getProjects.js";
import searchExperience from "./tools/searchExperience.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = new McpServer({
    name: "about-me-mcp-server",
    version: "1.0.0"
});

/* -------------------------------------------------------------------------- */
/*                                    TOOLS                                   */
/* -------------------------------------------------------------------------- */

server.registerTool(
    "get_profile",
    {
        title: "Get Profile",
        description: "Returns Saurabh's complete professional profile.",
        inputSchema: z.object({})
    },
    async () => {

        const result = getProfile();

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

server.registerTool(
    "get_skills",
    {
        title: "Get Skills",
        description: "Returns all technical skills.",
        inputSchema: z.object({})
    },
    async () => {

        const result = getSkills();

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

server.registerTool(
    "get_projects",
    {
        title: "Get Projects",
        description: "Returns all projects worked on by Saurabh.",
        inputSchema: z.object({})
    },
    async () => {

        const result = getProjects();

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

server.registerTool(
    "search_experience",
    {
        title: "Search Experience",
        description: "Search Saurabh's experience using a keyword (e.g. Node.js, MongoDB, JWT, Express).",
        inputSchema: z.object({
            keyword: z.string().describe("Technology or keyword to search")
        })
    },
    async ({ keyword }) => {

        const result = searchExperience(keyword);

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

/* -------------------------------------------------------------------------- */
/*                                 RESOURCES                                  */
/* -------------------------------------------------------------------------- */

server.registerResource(
    "profile",
    new ResourceTemplate("profile://me", { list: undefined }),
    {
        title: "Profile",
        description: "Complete profile information."
    },
    async () => {

        const profile = fs.readFileSync(
            path.join(__dirname, "data", "profile.json"),
            "utf8"
        );

        return {
            contents: [
                {
                    uri: "profile://me",
                    text: profile,
                    mimeType: "application/json"
                }
            ]
        };
    }
);

server.registerResource(
    "resume",
    new ResourceTemplate("resume://me", { list: undefined }),
    {
        title: "Resume",
        description: "Markdown resume."
    },
    async () => {

        const resume = fs.readFileSync(
            path.join(__dirname, "resources", "resume.md"),
            "utf8"
        );

        return {
            contents: [
                {
                    uri: "resume://me",
                    text: resume,
                    mimeType: "text/markdown"
                }
            ]
        };
    }
);

/* -------------------------------------------------------------------------- */
/*                                   START                                    */
/* -------------------------------------------------------------------------- */

async function startServer() {
    const transport = new StdioServerTransport();

    await server.connect(transport);

    console.error("✅ About Me MCP Server started successfully.");
}

startServer().catch((error) => {
    console.error(error);
    process.exit(1);
});