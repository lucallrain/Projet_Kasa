import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Collapse({ title, description, icon = "fa-chevron-down", iconExpanded = "fa-chevron-up", customClass = "" }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleCollapse()
    }
  }

  return (
    <div className={`collapse__container ${isCollapsed ? 'collapsed' : 'expanded'} ${customClass}`}>
      <div
        className="collapse__container__title"
        onClick={toggleCollapse}
        role="button"
        aria-expanded={!isCollapsed}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <h2>{title}</h2>
        <i className={`fa-solid ${isCollapsed ? icon : iconExpanded}`}></i>
      </div>
      {!isCollapsed && (
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
      )}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  icon: PropTypes.string,
  iconExpanded: PropTypes.string,
  customClass: PropTypes.string,
}

Collapse.defaultProps = {
  icon: "fa-chevron-down",
  iconExpanded: "fa-chevron-up",
  customClass: "",
}
