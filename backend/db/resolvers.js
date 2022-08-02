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
        getMovie: async (_, {movieId}) => {
            // Vérifier que le film existe
            const movie = await Movie.findById(movieId)

            if(!movie) {
                throw new Error("Film introuvable")
            }

            return movie
        },
        searchMovie: async (_, {text}) => {
            // Recherche le film par le nom d'auteur o le titre du film
            const movies = await Movie.find({ $text: { $search: text }})
            return movies
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
        },
        updateMovie: async (_, {id, input}) => {
            // Vérifier que le film existe
            let movie = await Movie.findById(id)

            if(!movie) {
                throw new Error("Film introuvable")
            }

            // Enregistrer le film dans la db
            movie = await Movie.findOneAndUpdate({ _id : id }, input, { new: true })
            return movie
        },
        deleteMovie: async (_, {id}) => {
            // Vérifier que le film existe
            let movie = await Movie.findById(id)

            if(!movie) {
                throw new Error("Film introuvable")
            }

            // Suprimer le film
            await Movie.findByIdAndDelete({ _id : id })
            return "Film supprimé avec succès"
        }
    }
}

module.exports = resolvers