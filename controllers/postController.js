import Posts from "../db/posts";
import moment from "moment";
class postsController {

    //get all posts
  static getPosts(req, res) {
    return res.json({
      posts: Posts
    });
  }

  //create post
    static createPost(req, res) {
        const newId = parseInt(Posts.length) + 1;
        const { title, body } = req.body;
        const newPost = {
        id: newId,
        title,
        body,
        created_at: moment.utc().format()
        };
        Posts.push(newPost);
        return res.status(200).json({
        message: "Post created succesfully"
        });
    }

    //get one post 
    static getOnePost(req, res) {
        const { id } = req.params;
        const post = Posts.find(singlePost => singlePost.id == id);
        if (post) {
        return res.status(200).json({
            Post: post
        });
        } else {
        res.status(400).json({
            error: "Post not found"
        });
        }
    }

    //update a post
    static updatePost(req, res) {
        const { id } = req.params;
        const post = Posts.find(updatePost => updatePost.id == id);
        if (post) {
        (post.title = req.body.title), (post.body = req.body.body);
        return res.status(201).json({
            message: "Post successfully updated",
            Post: post
        });
        } else {
        res.status(400).json({
            error: "Post update unsuccessful"
        });
        }
    }

    //delete a post
    static deletePost(req, res) {
        let { id } = req.params;
        const post = Posts.find(post => post.id == id);
        if (post) {
            Posts.pop(post)
        return res.status(200).json({
            message: "post successfully deleted",
            Posts: newPosts
        });
        } else {
        res.status(400).json({
            error: "Post deletion unsuccessful"
        });
        }
    }
}
export default postsController;
