# About Me MCP Server

A **Model Context Protocol (MCP) Server** built using **Node.js** and the **Model Context Protocol SDK**. This server exposes my professional profile, technical skills, work experience, projects, and resume as MCP tools and resources.

The server is designed to be consumed by MCP-compatible clients such as:

- Claude Desktop
- ChatGPT
- Claude Code
- Codex
- MCP Inspector

---

# Features

## MCP Tools

### 1. Get Profile

Returns my complete professional profile.

**Includes:**

- Personal Information
- Professional Summary
- Work Experience
- Education
- Contact Information
- Social Links

---

### 2. Get Skills

Returns all my technical skills grouped into categories.

**Categories**

- Programming Languages
- Backend Technologies
- Frontend Technologies
- Databases
- Software Architecture
- Cloud Technologies
- Version Control
- Tools
- Development Methodologies

---

### 3. Get Projects

Returns details of all projects I have worked on.

Each project includes:

- Project Name
- Company
- Technologies Used
- Description

---

### 4. Search Experience

Searches my professional profile using a keyword.

Examples:

- Node.js
- Express
- MongoDB
- TypeScript
- AWS
- JWT
- Polygon
- OData

If no matching information exists, the server returns an appropriate message.

---

# MCP Resources

## Profile

Returns my complete profile as JSON.

URI

```
profile://me
```

---

## Resume

Returns my resume in Markdown format.

URI

```
resume://me
```

---

# Project Structure

```
mcp-about-me/
│
├── src/
│   ├── data/
│   │     profile.json
│   │
│   ├── resources/
│   │     resume.md
│   │
│   ├── tools/
│   │     getProfile.js
│   │     getSkills.js
│   │     getProjects.js
│   │     searchExperience.js
│   │
│   └── server.js
│
├── package.json
└── README.md
```

---

# Prerequisites

- Node.js 18+
- npm

Verify installation

```bash
node -v
npm -v
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/mcp-about-me.git
```

Navigate to the project

```bash
cd mcp-about-me
```

Install dependencies

```bash
npm install
```

---

# Dependencies

- @modelcontextprotocol/sdk
- zod

---

# Running the Server

Start the MCP Server

```bash
node src/server.js
```

If everything is configured correctly, the server will start successfully and wait for MCP client connections.

---

# Testing with MCP Inspector

Launch the MCP Inspector

```bash
npx @modelcontextprotocol/inspector
```

The Inspector will automatically open in your browser.

---

## Inspector Configuration

### Transport

```
STDIO
```

### Command

```
node
```

### Arguments

```
src/server.js
```

Click **Connect**.

---

# Testing the Tools

## Get Profile

1. Open **Tools**
2. Select **Get Profile**
3. Click **Run Tool**

Returns:

- Personal Details
- Professional Summary
- Experience
- Education
- Contact Details
- Social Links

---

## Get Skills

1. Open **Tools**
2. Select **Get Skills**
3. Click **Run Tool**

Returns all technical skills grouped by category.

---

## Get Projects

1. Open **Tools**
2. Select **Get Projects**
3. Click **Run Tool**

Returns every project with technologies and descriptions.

---

## Search Experience

1. Open **Tools**
2. Select **Search Experience**
3. Enter a keyword.

Examples

```
Node.js
```

```
MongoDB
```

```
TypeScript
```

```
AWS
```

```
JWT
```

```
Polygon
```

Click **Run Tool**.

The tool searches across:

- Skills
- Work Experience
- Projects
- Professional Summary

Example

Searching

```
MongoDB
```

returns all matching skills, projects, and experience related to MongoDB.

Searching

```
Ruby
```

returns

```
No experience found for "Ruby".
```

---

# Testing Resources

Open

```
Resources
```

Click

```
List Resources
```

Available resources

```
profile://me

resume://me
```

Select any resource and click

```
Read Resource
```

to view its contents.

---

# Data Source

All profile information is stored in

```
src/data/profile.json
```

Update this file whenever your profile changes.

Examples:

- Skills
- Experience
- Projects
- Contact Information
- Education

---

# Resume

The resume resource is stored in

```
src/resources/resume.md
```

Update this file whenever your resume changes.

---

# Technologies Used

- Node.js
- JavaScript (ES Modules)
- Model Context Protocol SDK
- Zod

---

# Future Enhancements

- HTTP Transport Support
- Authentication
- Semantic Search
- Vector Database Integration
- AI-powered Resume Summarization
- Additional MCP Tools (Education, Contact, Certifications)

---

# Author

**Saurabh N**

Node.js Backend Developer

📧 saurabhn6666@gmail.com

📍 Noida, Uttar Pradesh, India

GitHub: https://github.com/saurabhneel

LinkedIn: https://linkedin.com/in/saurabh-neel
