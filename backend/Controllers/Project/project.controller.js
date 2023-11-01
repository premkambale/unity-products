const { projectCollection } = require('../../Models');
const { projectService } = require('../../Services');

// -------------------------------------------------------------------------------to create project--------------------------------------------------------------------

const create_project = async (req, res) => {
  // const file = req.file;
  // if (file) {
  // const payload = { ...req.body, document: req?.file?.buffer };
  const payload = { ...req.body };


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
  // }
  // else {
  //   res.send({ success: false, message: "failed to create project" })
  // }
}

const get_all_projects = async (req, res) => {
  try {
    const projects = await projectService.fetch_all_projects(req);
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
    res.send({ success: false,message: "failed to fetch project" })
  }
}

module.exports = {
  create_project,
  get_all_projects,
  get_project_by_id
}