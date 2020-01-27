const express = require("express");

const app = express();

app.use(express.json());

const projects = [];

//HTTP Methods
// POST/ projects
app.post("/projects", (req, res) => {
  const project = req.body;

  projects.push(project);

  return res.json(project);
});

// GET/ projects
app.get("/projects", (req, res) => {
  return res.json(projects);
});

// PUT/ projects/:id
app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// DELETE/ projects/:id
app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.status(200).json({ message: `Project ${id} Deleted!` });
});

// POST/ projects/:id/:tasks
app.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

app.listen(3000);
