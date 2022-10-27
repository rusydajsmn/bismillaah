module.exports = class API {
    //fetch all posts
    static async fetchAllPost(req, res) {
            res.send("Hello From API");
        }
        //fetch post by ID
    static async fetchPostByID(req, res) {
            res.send("Fetch Post by ID");
        }
        //Create a post
    static async createPost(req, res) {
            res.send("create Post");
        }
        //update a post
    static async updatePost(req, res) {
            res.send("update Post");
        }
        //delete a post
    static async deletePost(req, res) {
        res.send("delete Post");
    }
}