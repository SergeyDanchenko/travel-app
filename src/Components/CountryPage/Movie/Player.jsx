
import ReactPlayer from 'react-player'

function Player({countryMovie}) {
    return (
        <ReactPlayer url={countryMovie} 
        controls='true'
        width='100%'
        height='100%'
        />
    )
}

export default Player;