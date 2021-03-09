import Player from './Player'
import movie from './CountryMovie.module.scss'

function CountryMovie() {
    return (
        <div className={movie.wrapper}>
            <Player />
        </div>
    )
}

export default CountryMovie;