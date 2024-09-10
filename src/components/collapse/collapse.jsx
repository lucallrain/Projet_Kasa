import { useState } from 'react'
import'./collapse.scss'

export default function Collapse({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      className={`collapse__container ${isCollapsed ? 'collapsed' : 'expanded'}`}
    >
      <div
        className="collapse__container__title"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="collapse__container__txt">
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  )
}