const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./Schema/typeDefs');
const {resolvers} = require('./Schema/resolvers');
const mongoose = require('mongoose');
const app = express();

const server = new ApolloServer({typeDefs,resolvers});
server.start().then(async() => {
    server.applyMiddleware({app});
    app.use((req, res) => {
        res.send("Hello World!");
    });
    
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.pqln7.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("DB connected.")


    app.listen((3000),()=>{
        console.log("server running");
    });
}).catch((e) => {
    console.log("Error starting apollo server: ", e);
});