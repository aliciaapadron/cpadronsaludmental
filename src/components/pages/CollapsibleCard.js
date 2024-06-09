import React, { useState } from 'react';

export function CollapsibleCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-card">
      <div className="collapsible-card__header" onClick={toggleCard}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="collapsible-card__content">{children}</div>}
    </div>
  );
}
