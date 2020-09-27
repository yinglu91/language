import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
  const { language } = useContext(LanguageContext);

  const nameLabel = language === 'english' ? 'Name' : 'Naam';
  return (
    <div className="ui field">
      <label>{nameLabel}</label>
      <input />
    </div>
  );
};

export default Field;
