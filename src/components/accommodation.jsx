
import { useParams } from 'react-router-dom'
import Collapse from './collapse'
import Slideshow from './slideshow'
import Error from './error'
import { useState, useEffect } from 'react'

export default function Accomodation() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundItem = data.find((item) => item.id === id)
        setItem(foundItem)
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error)
        setItem(null)
      })
  }, [id])
  if (!item) {
    return <Error />
  }
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="accomodation__container">
      <Slideshow pictures={item.pictures} />
      <div className="info__container">
        <div className="info__container__txt">
          <h2>{item.title}</h2>
          <p>{item.location}</p>
          <div className="info__container__tags">
            <ul>
              {item.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="info__container__profile">
          <div className="info__container__host">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="hôte" />
          </div>
          <div className="info__container__rating">
            {range.map((rangeElem) => (
              <i
                key={rangeElem}
                className={`fa-solid fa-star ${item.rating >= rangeElem ? 'filled-star' : 'empty-star'}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="accomodation__container__info">
        <Collapse title="Description" description={item.description} />
        <Collapse title="Équipements" description={item.equipments} />
      </div>
    </div>
  )
}
