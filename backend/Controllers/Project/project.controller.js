const { projectCollection } = require('../../Models');
const { projectService } = require('../../Services');

// -------------------------------------------------------------------------------to create project--------------------------------------------------------------------

const create_project = async (req, res) => {
  const body = req.body;
  const projectImages = req.files['project_image'];
  let payload;
  if (req.files) {
    const projectImagePaths = projectImages.map(file => file.path)
    payload = { ...req.body, project_image: projectImagePaths};
  }
  else {
    payload = { ...req.body };
  }
  console.log({ body })
  const new_project = new projectCollection(payload);
  try {
    await new_project.save();
    res.send({
      message: 'project created sucessfully',
      success: true,
    })
  }
  catch (error) {
    res.send({ success: false, message: "failed to create project" })
  }
}

// -------------------------------------------------------------------------------To Get All project--------------------------------------------------------------------
const get_all_projects = async (req, res) => {
  try {
    const projects = await projectService.fetch_all_projects(req);
    console.log({ projects })
    if (projects) {
      res.send({ success: true, data: projects });
    }
    else {
      res.send({ success: false, message: "failed to fetch projects" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to fetch projects" })
  }
}

// -------------------------------------------------------------------------------To Get project By Id--------------------------------------------------------------------
const get_project_by_id = async (req, res) => {
  try {
    const project = await projectService.fetch_project_by_projectID(req);
    if (project) {
      res.send({ success: true, data: project });
    }
    else {
      res.send({ success: false, message: "failed to fetch project" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to fetch project" })
  }
}

// -------------------------------------------------------------------------------To Delete All projects --------------------------------------------------------------------
const delete_all_projects = async (req, res) => {
  try {
    const projects = await projectService.delete_all_projects(req);
    if (projects) {
      res.send({ success: true, data: projects });
    }
    else {
      res.send({ success: false, message: "failed to delete projects" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to delete projects" })
  }
}

// -------------------------------------------------------------------------------To Delete project By Id--------------------------------------------------------------------
const delete_project_by_id = async (req, res) => {
  try {
    const project = await projectService.delete_project_by_projectID(req);
    if (project) {
      res.send({ success: true, message: "project deleted successfully", data: project });
    }
    else {
      res.send({ success: false, message: "failed to delete project" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to delete project" })
  }
}

// -------------------------------------------------------------------------------To Update project By project Id--------------------------------------------------------------------
const update_project = async (req, res) => {
  const payload = req.body;
  console.log({payload})
  try {
    await projectService.update_project_by_id(req);
    res.send({ success: true, message: "project updated successfully" })
  } catch (error) {
    res.send({ success: false, message: "failed to update project" })
  }
}

module.exports = {
  create_project,
  get_all_projects,
  get_project_by_id,
  delete_all_projects,
  delete_project_by_id,
  update_project
}