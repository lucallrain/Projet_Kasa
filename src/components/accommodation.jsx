import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Collapse from './collapse';
import Slideshow from './slideshow';
import Error from './error';

export default function Accomodation() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchAccommodationData = () => {
      const storedData = localStorage.getItem('accommodationList');
      if (storedData) {
        const accommodationList = JSON.parse(storedData);
        const foundItem = accommodationList.find((i) => i.id === id);
        if (foundItem) {
          setItem(foundItem);
          setError(false);
          setTimeout(() => setIsVisible(true), 50);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    };

    fetchAccommodationData();
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (error) {
    return <Error />;
  }

  return (
    item && (
      <div className={`accomodation__container ${isVisible ? 'accomodation__container__visible' : ''}`}>
        <Slideshow pictures={item.pictures} />
        <div className="info__container">
          <div className="info__container__txt">
            {imageError ? (
              <div className="info__container__fallback">
                <div className="info__container__fallback__title">titre de la location</div>
              </div>
            ) : (
              <>
                <h2>{item.title}</h2>
                <p>{item.location}</p>
                <div className="info__container__tags">
                  <ul>
                    {item.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="info__container__profile">
            <div className="info__container__host">
              <p>{item.host.name}</p>
              <img
                src={item.host.picture}
                alt="hôte"
                onError={handleImageError}
              />
            </div>
            <div className="info__container__rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <i
                  key={n}
                  className={`fa-solid fa-star ${item.rating >= n ? 'filled-star' : 'empty-star'}`}
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
  );
}
