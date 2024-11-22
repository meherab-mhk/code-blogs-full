const blogModel = require("../Models/Blog");


const createBlog = async (req, res) => {
    try {
        const {title, content, author} = req.body;
        const result = await blogModel.create({title, content, author});
        console.log(result);
        if (result) {
            console.log("Blog posted successfully");
            return res.status(201).json({ message: "Blog posted successfully", success: true, blog: result });
        } else {
            console.log("Blog post failed");
            res.status(400).json({ message: "Blog post failed", success: false });
        }
        await blogModel.save();
    } catch (error) {
        res.status(500)
        .json({message: "hello from the server", success: false})
    }
}

const getAllBlogs = async (req, res) => {
    const result = await blogModel.find({});
    res.send(result);
}

const getBlogById = async (req, res) => {
    const _id = req.params.id;
    const result = await blogModel.findById(_id);
    res.send(result);
}

const updateBlog = async (req, res) => {
    try {
        const _id = req.params.id;
        const {title, content} = req.body;
        const result = await blogModel.findByIdAndUpdate (
            _id,
            {title, content},
            {new: true}
         );
         if (result) {
            res.status(200).json({ success: true, message: "Blog updated successfully", result });
        } else {
            res.status(404).json({ success: false, message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating blog", error: error.message });
    }
}

const deleteBlog = async (req, res) => {
    const _id = req.params.id;
    const result = await blogModel.deleteOne({_id});
    res.send("blog is deleted");
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}