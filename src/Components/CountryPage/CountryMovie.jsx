import movie from './CountryMovie.module.scss'


function CountryMovie() {
    return (
        <div className={movie.wrapper}>
            <div className={movie.player}>Movie player</div>
        </div>
    )
}

export default CountryMovie;