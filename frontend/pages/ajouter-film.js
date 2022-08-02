import Layout from "../components/Layout"

export default function AjouterFilm() {
  return (
    <>
      <Layout
        page={'Ajouter un film'}
      >
        <form>
            <h1>Ajouter un nouveau film</h1>
            <div>
                <input
                    id="title"
                    type="text"
                    placeholder="Titre de film..."
                />
            </div>
            <div>
                <input
                    id="author"
                    type="text"
                    placeholder="L'auteur de film..."
                />
            </div>
            <div>
                <textarea
                    id="description"
                    placeholder="Description de film..."
                />
            </div>
            <div>
                <input
                    id="cover"
                    type="text"
                    placeholder="Couverture de film..."
                />
            </div>
            <div>
                <input
                    id="duration"
                    type="number"
                    placeholder="Duration de film..."
                />
            </div>
            <div>
                <input
                    id="publishedDate"
                    type="date"
                />
            </div>

            <input
                type="submit"
                value="Ajouter le film"
            />
        </form>
      </Layout>
    </>
  )
}