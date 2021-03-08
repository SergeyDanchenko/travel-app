
import CountryDescription from './CountryDescription.module.scss'
function CountryInfo() {
    return (
        <div className={CountryDescription.wrapper}>
            <div className={CountryDescription.photo}>Photo</div>
            <div className={CountryDescription.name}>Name</div>
            <div className={CountryDescription.capital}>Capital</div>
            <div className={CountryDescription.widgets}>Widgets</div>
            <div className={CountryDescription.info}>Info about</div>
        </div>
    )
}

export default CountryInfo;