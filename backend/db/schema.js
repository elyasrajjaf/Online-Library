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
        # Obtenir tous les films
        getMovies: [Movie]

        # Obtenir un film par id
        getMovie(id: ID!): Movie

        # Rechercher film
        searchMovie(text: String!) : [Movie]

    }

    type Mutation {
        # Création d'un film
        newMovie(input: MovieInput): Movie

        # Mettre à jour un film
        updateMovie(id: ID!, input: MovieInput) : Movie

        # Supprimer un film
        deleteMovie(id: ID!) : String
    }

`
module.exports = typeDefs