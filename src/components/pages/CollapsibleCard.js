import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export function CollapsibleCard({ title, children, src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-card">
      <div className="collapsible-card__header" onClick={toggleCard}>
        <div>
          <h3>{title}</h3>
          {src && (
            <img
              className="team__img"
              src={src}
              alt={alt || title}
              title={title}
            />
          )}
        </div>

        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="collapsible-card__icon"
        />
      </div>
      {isOpen && <div className="collapsible-card__content">{children}</div>}
    </div>
  );
}
