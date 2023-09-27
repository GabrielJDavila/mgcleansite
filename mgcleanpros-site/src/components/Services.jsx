
export default function Services() {
    const data = [
        {
            title: "Residential Cleaning",
            image: "./homeicon.png",
            descrip: "Moving in, moving out, deep cleans, maintaince cleans, we do it all! You deserve a clean home that you can relax in.",
        },
        {
            title: "Commercial Cleaning",
            image: "./officeicon.png",
            descrip: "For the business that is customer-focused, we can get your place in top-notch shape! We clean office suites, office spaces, salons, party rooms, gyms, etc.",
        },
        {
            title: "Speciality Cleaning",
            image: "./suppliesicon.png",
            descrip: "Not sure if we can be your solution? We've done grocery deli kitchens, garage clean outs, minor junk removal, after party cleaning, etc. We've either done it, or are willing to do it. Give us a call!",
        }
    ]

    const services = data.map((obj, index) => {
        return (
            <div key={index} className="service-item">
                <div className="service-title-icon-container">
                    <img className="services-icon" src={obj.image}/>
                    <h3 className="service-item-title">{obj.title}</h3>
                </div>
                <div className="service-item-underline"></div>
                <p className="service-item-description">{obj.descrip}</p>
            </div>
        )
    })
    return (
        <div className="services-section">
            <h2 id="services" className="services-title">Our Services</h2>
            <div className="title-underline"></div>
            <div className="services-list">
                {services}
            </div>
        </div>
    )
}