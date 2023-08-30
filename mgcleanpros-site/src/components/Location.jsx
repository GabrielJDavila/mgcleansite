
export default function Location() {
    return (
        <div id="areas" className="location-section">
            <h2 className="location-title">Our Service Areas</h2>
            <p className="location-text">We are based out of Aurora IL, but we service the areas surrounding Aurora as well. Call us to see if we come to you!</p>
            <div className="areas-container">
                <p className="town">Aurora</p>
                <p className="town">Naperville</p>
                <p className="town">Oswego</p>
                <p className="town">Sugar Grove</p>
                <p className="town">Batavia</p>
                <p className="town">Wheaton</p>
                <p className="town">Winfield</p>
                <p className="town">Oakbrook</p>
                <p className="town">Geneva</p>
                <p className="town">Plainfield</p>
                <p className="town">Bolingbrook</p>
                <p className="town">Lisle</p>
                <p className="town">North Aurora</p>
            </div>
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95250.82546373349!2d-88.30671890000002!3d41.75097235000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee54d4ed5111b%3A0x7fd1f848c350e85d!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1693333916629!5m2!1sen!2sus"
                style={{border:"0"}}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}