import Player from './Player'
import movie from './CountryMovie.module.scss'

function CountryMovie({countryMovie}) {
    return (
        <div className={movie.wrapper}>
            <Player countryMovie={countryMovie}/>
        </div>
    )
}

export default CountryMovie;