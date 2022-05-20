const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type Post {
        id: ID,
        title: String,
        description: String
    }

    type Query {
        hello: String!,
        getAllPosts: [Post],
        getPost(id: ID): Post
    }

    input postInput {
        title: String,
        description: String
    }

    type Mutation {
        createPost(post: postInput): Post,
        deletePost(id: ID): String
        deletePostByTitle(title: String): String
        updatePost(id: ID, post: postInput): Post
    }

`
module.exports = {typeDefs};