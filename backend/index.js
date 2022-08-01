const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Server 
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Start Server
server.listen()
    .then(({url}) => {
        console.log(`Serveur prêt dans l'url:${url}`)
    })