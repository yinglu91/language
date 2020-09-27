import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const lang = useContext(LanguageContext);
  const color = useContext(ColorContext);

  console.log('lang=' + lang + ', color=' + color);
  
  const submitText = lang === 'english' ? 'Submit' : 'Voorleggen';

  return <button className={`ui button ${color}`}>{submitText}</button>;
};

export default Button;
