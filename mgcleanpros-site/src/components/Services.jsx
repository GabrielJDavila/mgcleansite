
export default function Services() {

    const data = [
        {
            title: "Residential Cleaning",
            image: "image",
            descrip: "We provide deep cleaning and maintaince cleaning for all your needs."
        },
        {
            title: "Move In / Move Out Cleaning",
            image: "image",
            descrip: "Whether you're moving in or out, we can get your home ready!"
        },
        {
            title: "Office Cleaning",
            image: "image",
            descrip: "We also provide services to businesses looking to keep their locations show-ready. Keep a clean environment for your customers!"
        },
        {
            title: "Speciality Cleans",
            image: "image",
            descrip: "Have a specific problem but not sure if we can help? Give us a call. We've done all sorts of non-traditional cleans: garage clean outs, grocery store kitckens, construction site clean up, you name it we've done it, or will do it!"
        }
    ]

    const services = data.map((obj, index) => {
        return (
            <div key={index}>
                <h3>{obj.title}</h3>
                <p>{obj.image}</p>
                <p>{obj.descrip}</p>
            </div>
        )
    })
    return (
        <div className="services-section">
            <h3 className="services-title">Services Section</h3>

            {services}
        </div>
    )
}