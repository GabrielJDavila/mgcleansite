import img1 from "/gallery/mgcleangallery1.jpg"
import img2 from "/gallery/mgcleangallery2.jpg"
import img3 from "/gallery/mgcleangallery3.jpg"
import img4 from "/gallery/mgcleangallery4.jpg"
import img5 from "/gallery/mgcleanbefore.jpg"
import img6 from "/gallery/mgcleanafter.jpg"
import img7 from "/gallery/mgcleangallery5.jpg"
import img8 from "/gallery/mgcleangallery6.jpg"
import img9 from "/gallery/mgcleangallery7.jpg"
import img10 from "/gallery/mgcleangallery8.jpg"
import img11 from "/gallery/mgcleanbefore2.jpg"
import img12 from "/gallery/mgcleanafter2.jpg"
import { Bars3Icon, ChevronDownIcon, XMarkIcon, ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"

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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(windowWidth < 950) {
            const interval = setInterval(() => {
                handleClickNext()
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [arrIndex])

    function handleClickNext() {
        setArrIndex(prev => (prev + 1) % imgArray.length)
    }

    function handleClickPrev() {
        setArrIndex(prev => prev === 0 ? imgArray.length - 1 : prev - 1)
        // setArrIndex(prev => prev >= 1 ? (prev - 1) % imgArray.length : prev = imgArray.length - 1)
    }

    const renderedImages = imgArray.map((image, index) => {
        console.log(image)
        return (
            <img key={index} src={image} className={`gall-img ${index === arrIndex ? "current-img" : ""}`}></img>
        )
    })
    
    const gridRenderedImages = imgArray.map((image, index) => {
        console.log(image)
        return (
            <img key={index} src={image} className="gall-img"></img>
        )
    })

    console.log(arrIndex)
    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gall-div">
                {windowWidth < 950 ?
                renderedImages
                :
                gridRenderedImages
                }
                {/* <img src={imgArray[arrIndex]} className="gall-img"></img> */}
                {windowWidth < 950 ?
                <div className="gal-btn-div">
                    <div className={`gal-btn ${0 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${1 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${2 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${3 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${4 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${5 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${6 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${7 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${8 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${9 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${10 === arrIndex ? "current-btn" : ""}`}></div>
                    <div className={`gal-btn ${11 === arrIndex ? "current-btn" : ""}`}></div>
                </div>
                : ""
                }
            </div>
            
            <div className="gal-next-and-prev-div">
                <ArrowLeftCircleIcon onClick={handleClickPrev} className="prev"/>
                <ArrowRightCircleIcon onClick={handleClickNext} className="next"/>
            </div>
        </section>
    )
}