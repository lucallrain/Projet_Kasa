import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Collapse from './collapse';
import Slideshow from './slideshow';
import Error from './error';

export default function Accomodation() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setItem(data.find((i) => i.id === id)))
      .catch(() => setItem(null));
  }, [id]);

  if (!item) return <Error />;

  return (
    <div className="accomodation__container">
      <Slideshow pictures={item.pictures} />
      <div className="info__container">
        <div className="info__container__txt">
          <h2>{item.title}</h2>
          <p>{item.location}</p>
          <div className="info__container__tags">
            <ul>
              {item.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
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
  );
}
