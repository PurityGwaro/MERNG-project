const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const { MONGODB } = require('./config');

const typeDefs = gql`
    type Query{
        sayHi: String!#means it's required
    }
`
const resolvers = {
    Query: {
        sayHi: () =>{
            return "Hello World!!!!!"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true });;

server.listen({ port: 5000 })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });