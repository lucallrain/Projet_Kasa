import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Card() {
  const [accommodationList, setAccommodationList] = useState([]);

  useEffect(() => {
    const fetchAccommodationList = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setAccommodationList(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchAccommodationList();
  }, []);

  return (
    <div className="cards__container">
      {accommodationList.map((item) => (
        <Link
          className="cards__container__link"
          to={`/accommodation/${item.id}`}
          key={item.id}
        >
          <div className="cards__container__card">
            <img
              src={item.cover}
              alt={`Logement: ${item.title}`}
              className="cards__container__img"
            />
            <h2 className="cards__container__title">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
