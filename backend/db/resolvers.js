const Movie = require('../models/Movie')

// Resolvers
const resolvers = {
    Query: {
        getMovies: async () => {
            try {
                const movies = await Movie.find({})
                return movies
            } catch (error) {
                console.log(error)
            }
        },
        getMovie: async (_, {id}) => {
            // Vérifier que le film existe
            const movie = await Movie.findById(id)

            if(!movie) {
                throw new Error("Le film n'existe pas")
            }

            return movie
        }
    },
    Mutation: {
        newMovie: async (_, {input}) => {

            const { title } = input

            // Si le film existe dejà
            const existeMovie = await Movie.findOne({title})
            if(existeMovie) {
                throw new Error('Le film existe déjà')
            }
                
            // Enregistrer dans la base de données
            try {
                const movie = new Movie(input)
                movie.save()
                return movie
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = resolvers