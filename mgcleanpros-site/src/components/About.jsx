
export default function About() {
    return (
        <>
        <div id="about" className="about-section">
            <h2 className="about-title">A Little Story About Us</h2>
            <div className="title-underline"></div>
            <i className="fa-solid fa-chevron-down"></i>
            <p className="about-description">
                We are a small business that started off as just a "side gig".
                In a short amount of time, we've grown into a full-fledged small business and we truly enjoy our work.<br></br><br></br>
                We love getting great reactions from customers - its always a big "WOW!" after a clean, and it gives us a good feeling.
                We love making our customers' days better.
            </p>
        </div>
        <div className="more-about-us-section">
            <h3>What makes us different?</h3>
            <ul className="our-tenants-list">
                <li className="tenants-item">customer focused</li>
                <li className="tenants-item">detail oriented</li>
                <li className="tenants-item">timely cleans</li>
                <li className="tenants-item">superior service</li>
            </ul>
            <p className="call-today-text">You won't find other cleaners doing what we do. Check out the difference yourself.</p>
            <a className="call-today-btn" href="tel:+6306423773">Call us today to book!</a>
        </div>
        </>
    )
}