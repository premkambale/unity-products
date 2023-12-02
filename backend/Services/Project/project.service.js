const { projectCollection } = require('../../Models');

// -----------------------------------------------------------------------------------To Get All project -------------------------------------------------------------------------------------------------------
const fetch_all_projects = async (req) => {
  return await projectCollection.find();
}
// -----------------------------------------------------------------------------------To Get project By user _id -------------------------------------------------------------------------------------------------------
const fetch_project_by_projectID = async (req) => {
  return await projectCollection.find({ _id: req.params.projectId });
}
// -----------------------------------------------------------------------------------To Delete All project -------------------------------------------------------------------------------------------------------
const delete_all_projects = async (req) => {
  return await projectCollection.deleteMany({});
}
// -----------------------------------------------------------------------------------To Delete project By user _id -------------------------------------------------------------------------------------------------------
const delete_project_by_projectID = async (req) => {
  return await projectCollection.findOneAndDelete({ _id: req.params.projectId });
}

// -----------------------------------------------------------------------------------To Delete project By user _id -------------------------------------------------------------------------------------------------------
const update_project_by_id = async (req) => {
  return await projectCollection.findByIdAndUpdate(req.params.projectId, req.body, { new: true })
}

module.exports = {
  fetch_all_projects,
  fetch_project_by_projectID,
  delete_all_projects,
  delete_project_by_projectID,
  update_project_by_id
}