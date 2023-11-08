const { blogCollection } = require('../../Models');

// -----------------------------------------------------------------------------------To Get All blog -------------------------------------------------------------------------------------------------------
const fetch_all_blogs = async (req) => {
  return await blogCollection.find();
}
// -----------------------------------------------------------------------------------To Get blog By user _id -------------------------------------------------------------------------------------------------------
const fetch_blog_by_blogID = async (req) => {
  return await blogCollection.find({ _id: req.params.blogId });
}
// -----------------------------------------------------------------------------------To Delete All blog -------------------------------------------------------------------------------------------------------
const delete_all_blogs = async (req) => {
  return await blogCollection.deleteMany({});
}
// -----------------------------------------------------------------------------------To Delete blog By user _id -------------------------------------------------------------------------------------------------------
const delete_blog_by_blogID = async (req) => {
  return await blogCollection.findOneAndDelete({ _id: req.params.blogId });
}

// -----------------------------------------------------------------------------------To Delete blog By user _id -------------------------------------------------------------------------------------------------------
const update_blog_by_id = async (req) => {
  return await blogCollection.findByIdAndUpdate(req.params.blogId, req.body, { new: true })
}

module.exports = {
  fetch_all_blogs,
  fetch_blog_by_blogID,
  delete_all_blogs,
  delete_blog_by_blogID,
  update_blog_by_id
}