import map from './CountryMap.module.scss'


function CountryMap() {
    return (
        <div className={map.wrapper}>
            <div className={map.map}>map</div>
        </div>
    )
}

export default CountryMap;