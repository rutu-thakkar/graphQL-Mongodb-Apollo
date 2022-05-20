const Post = require('../models/postModel')
const resolvers = {
    Query: {
        hello: () => {
            return "hello World!"
        },
        getAllPosts: async () => {
            return await Post.find()
        },
        getPost: async (_parent, {id} , _context, _info) => {
            // const {id} = args
            return await Post.findById(id);
        }
    },

    Mutation: {
        createPost: async (parent,args,context, info) => {
            const { title, description } = args.post;
            const post = new Post({title, description});
            await post.save();
            return post;
        },
        deletePost: async (parent,args,context,info) => {
            const {id} = args
            await Post.findByIdAndDelete(id);
            return "Ok, Post deleted.";
        },
        deletePostByTitle: async (parent,args,context,info) => {
            const {title} = args
            const postbyTitle = await Post.find({title: title});
            if(postbyTitle.length > 0) {
                await Post.deleteOne({ title: postbyTitle[0].title
            })
                return "Ok, Post deleted by title.";
            } else{
                return "Post with given title doesnot exist.";
            };
        },
        updatePost: async(parent,args,context,info) => {
            const { id } = args;
            const {title,description} = args.post;
            const updatedPost = await Post.findByIdAndUpdate(id,{
                title,
                description
            },{new:true}) // new: true to return updated record 
            return updatedPost;
        }
    }
}

module.exports = {resolvers};