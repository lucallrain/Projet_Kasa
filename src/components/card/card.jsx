import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './card.scss'

export default function Card() {
  const [accommodationList, setAccommodationList] = useState([]);

  useEffect(() => {
    const fetchAccommodationList = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setAccommodationList(data);
        localStorage.setItem('accommodationList', JSON.stringify(data));
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchAccommodationList();
  }, []);

  return (
    <div className="cards__container">
      {accommodationList.map(({ id, cover, title }) => (
        <Link
          className="cards__container__link"
          to={`/accommodation/${id}`}
          key={id}
        >
          <div className="cards__container__card">
            <img
              src={cover}
              alt={`Logement: ${title}`}
              className="cards__container__img"
            />
            <h3 className="cards__container__title">{title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
