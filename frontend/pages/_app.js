import '../styles/globals.css'
import { MoviesProvider} from '../context/MoviesProvider'

function MyApp({ Component, pageProps }) {
  return ( 
    <MoviesProvider>
      <Component {...pageProps} />
    </MoviesProvider>
  )
}

export default MyApp
