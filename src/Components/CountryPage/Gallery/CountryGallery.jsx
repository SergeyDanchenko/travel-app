import gallery from './CountryGallery.module.scss'


function CountryGallery() {
    return (
        <div className={gallery.wrapper}>
            <div className={gallery.preview}>preview</div>
            <div className={gallery.slide}>Slider</div>
        </div>
    )
}

export default CountryGallery;