import { useState, useRef } from "react"
export default function Reviews() {
    const [reviewCount, setReviewCount] = useState(0)

    const data = [
        {
            review: "They are the best! Professional, timely, and great customer service.",
            name: "Ashley Tisdale"
        },
        {
            review: "I will never look for other cleaners again. These people are amazing.",
            name: "Drew Barymore"
        },
        {
            review: "Marie and her team are customer focused; they get the job done and go above and beyond.",
            name: "Tasha Nasha"
        },
        {
            review: "Amazing work, they always beat my expectations!",
            name: "Sunali Bunali"
        }
    ]

    
    const renderedReviews = data.map((item, index) => {
        return (
            <div key={index} className="review-item">
                <p className="review-text">"{item.review}"</p>
                <p className="review-name">{item.name}</p>
            </div>
        )
    })

    return (
        <div id="reviews" className="review-section">
            <h2 className="review-section-title">What Customers Say About Us...</h2>
            {renderedReviews}
            {/* <div className="carousel-button-container">
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div> */}
        </div>
    )
}