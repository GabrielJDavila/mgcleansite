import { useState, useRef } from "react"
import { reviewsArr } from "../../public/reviewsArr"
export default function Reviews() {

    // const data = [
    //     {
    //         review: "They are the best! Professional, timely, and great customer service.",
    //         name: "Ashley T."
    //     },
    //     {
    //         review: "I will never look for other cleaners again. These people are amazing.",
    //         name: "Drew B."
    //     },
    //     {
    //         review: "Marie and her team are customer focused; they get the job done and go above and beyond.",
    //         name: "Tasha N."
    //     },
    //     {
    //         review: "Amazing work, they always beat my expectations!",
    //         name: "Sunali B."
    //     }
    // ]

    
    const renderedReviews = reviewsArr.map((item, index) => {
        return (
            <div key={index} className="review-item">
                <p className="review-text">"{item.text}"</p>
                <p className="review-name">{item.name}</p>
            </div>
        )
    })

    return (
        <div id="reviews" className="review-section">
            <h2 className="review-section-title">What Customers Say About Us...</h2>
            <div className="reviews-list">
                {renderedReviews}
            </div>
        </div>
    )
}