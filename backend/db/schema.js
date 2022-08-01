const { gql } = require('apollo-server')

// Schema
const typeDefs = gql`
    type Movie {
        id: ID
        title: String
        author: String
        description: String
        cover: String
        duration: Int
        publishedDate: String        
    }

    input MovieInput {
        title: String!
        author: String!
        description: String!
        cover: String!
        duration: Int!
    }

    type Query {
        getMovie: String  
    }

    type Mutation {
        newMovie(input: MovieInput): Movie
    }

`
module.exports = typeDefs