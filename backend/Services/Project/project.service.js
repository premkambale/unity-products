const { projectCollection } = require('../../Models');


// -----------------------------------------------------------------------------------To Fetch projects  -------------------------------------------------------------------------------------------------------
const fetch_all_projects = async (req) => {
  return await projectCollection.find();
}
// -----------------------------------------------------------------------------------To Fetch projects User By projectId-------------------------------------------------------------------------------------------------------
const fetch_project_by_projectID = async (req) => {
  return await projectCollection.find({ _id: req.params.projectId });
}
module.exports = {
  fetch_all_projects,
  fetch_project_by_projectID
}