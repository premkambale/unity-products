const { blogCollection } = require('../../Models');
const { blogService } = require('../../Services');

// -------------------------------------------------------------------------------to create blog--------------------------------------------------------------------

const create_blog = async (req, res) => {
  const body = req.body;
  const blogImages = req.files['blog_image'];
  let payload;
  if (req.files) {
    const blogImagePaths = blogImages.map(file => file.path)
    payload = { ...req.body, blog_image: blogImagePaths };
  }
  else {
    payload = { ...req.body };
  }
  console.log({ body })
  const new_blog = new blogCollection(payload);
  try {
    await new_blog.save();
    res.send({
      message: 'blog created sucessfully',
      success: true,
    })
  }
  catch (error) {
    res.send({ success: false, message: "failed to create blog" })
  }
}

// -------------------------------------------------------------------------------To Get All blog--------------------------------------------------------------------
const get_all_blogs = async (req, res) => {
  try {
    const blogs = await blogService.fetch_all_blogs(req);
    console.log({ blogs })
    if (blogs) {
      res.send({ success: true, data: blogs });
    }
    else {
      res.send({ success: false, message: "failed to fetch blogs" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to fetch blogs" })
  }
}

// -------------------------------------------------------------------------------To Get blog By Id--------------------------------------------------------------------
const get_blog_by_id = async (req, res) => {
  try {
    const blog = await blogService.fetch_blog_by_blogID(req);
    if (blog) {
      res.send({ success: true, data: blog });
    }
    else {
      res.send({ success: false, message: "failed to fetch blog" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to fetch blog" })
  }
}

// -------------------------------------------------------------------------------To Delete All blogs --------------------------------------------------------------------
const delete_all_blogs = async (req, res) => {
  try {
    const blogs = await blogService.delete_all_blogs(req);
    if (blogs) {
      res.send({ success: true, data: blogs });
    }
    else {
      res.send({ success: false, message: "failed to delete blogs" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to delete blogs" })
  }
}

// -------------------------------------------------------------------------------To Delete blog By Id--------------------------------------------------------------------
const delete_blog_by_id = async (req, res) => {
  try {
    const blog = await blogService.delete_blog_by_blogID(req);
    if (blog) {
      res.send({ success: true, message: "blog deleted successfully", data: blog });
    }
    else {
      res.send({ success: false, message: "failed to delete blog" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to delete blog" })
  }
}

// -------------------------------------------------------------------------------To Update blog By blog Id--------------------------------------------------------------------
const update_blog = async (req, res) => {
  const payload = req.body;
  console.log({ payload })
  try {
    await blogService.update_blog_by_id(req);
    res.send({ success: true, message: "blog updated successfully" })
  } catch (error) {
    res.send({ success: false, message: "failed to update blog" })
  }
}

module.exports = {
  create_blog,
  get_all_blogs,
  get_blog_by_id,
  delete_all_blogs,
  delete_blog_by_id,
  update_blog
}