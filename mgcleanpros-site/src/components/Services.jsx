
export default function Services() {
    const data = [
        {
            title: "Residential Cleaning",
            image: "./homeicon.png",
            descrip: "Moving in, moving out, deep cleans, maintaince cleans, we do it all! Call us for a clean home you can come relax in, knowing all the hard work is done for you.",
        },
        {
            title: "Office Cleaning",
            image: "./officeicon.png",
            descrip: "For the business that is customer-focused, you might want a clean area for your customers to enjoy the space. We'll come make sure your business is in top-top shape.",
        },
        {
            title: "Speciality Cleaning",
            image: "./suppliesicon.png",
            descrip: "Not sure if we can be your solution? We've done grocery deli kitchens, gyms, garage clean outs, minor junk removal, etc. We've either done it, or are willing to do it. Give us a call!",
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
            <h2 className="services-title">Our Services</h2>
            <div className="title-underline"></div>
            {services}
        </div>
    )
}