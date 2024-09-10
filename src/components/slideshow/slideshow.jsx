import { useState } from 'react'
import './slideshow.scss'

export default function Slideshow({ pictures }) {
  const [slide, setSlide] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = slide === 0
    const newIndex = isFirstSlide ? pictures.length - 1 : slide - 1
    setSlide(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = slide === pictures.length - 1
    const newIndex = isLastSlide ? 0 : slide + 1
    setSlide(newIndex)
  }
  return (
    <div className="slideshow__container">
      <img
        src={pictures[slide]}
        alt="carrousel du logement"
        className="slideshow__container__img"
      />
      <i className="fa-solid fa-chevron-left" onClick={goToPrevious}></i>
      <i className="fa-solid fa-chevron-right" onClick={goToNext}></i>
      <p className='slideshow__container__txt'>{slide + 1}/{pictures.length}</p>
    </div>
  )
}