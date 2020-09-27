import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  const lang = useContext(LanguageContext);

  const submitText = lang === 'english' ? 'Submit' : 'Voorleggen';

  return <button className="ui button primary">{submitText}</button>;
};

export default Button;
