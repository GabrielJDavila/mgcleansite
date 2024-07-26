import img1 from "/gallery/mgcleangallery1.jpg"
import img2 from "/gallery/mgcleangallery2.jpg"
import img3 from "/gallery/mgcleangallery3.jpg"
import img4 from "/gallery/mgcleangallery4.jpg"
import img5 from "/gallery/mgcleangallery5.jpg"
import img6 from "/gallery/mgcleangallery6.jpg"
import img7 from "/gallery/mgcleangallery7.jpg"
import img8 from "/gallery/mgcleangallery8.jpg"
import img9 from "/gallery/mgcleanbefore.jpg"
import img10 from "/gallery/mgcleanafter.jpg"
import img11 from "/gallery/mgcleanbefore2.jpg"
import img12 from "/gallery/mgcleanafter2.jpg"
import { useState } from "react"

const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12
]

export default function Gallery() {
    const [arrIndex, setArrIndex] = useState(0)

    function handleClickNext() {
        setArrIndex(prev => (prev + 1) % imgArray.length)
    }

    function handleClickPrev() {
        setArrIndex(prev => prev >= 1 ? (prev - 1) % imgArray.length : prev = imgArray.length - 1)
    }

    console.log(arrIndex)
    return (
        <section className="gallery">
            <div>Gal Section Here</div>
            <img src={imgArray[arrIndex]} className="gall-img"></img>
            <button onClick={handleClickNext}>click next</button>
            <button onClick={handleClickPrev}>click prev</button>
        </section>
    )
}