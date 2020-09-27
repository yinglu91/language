import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const { language } = useContext(LanguageContext);
  const color = useContext(ColorContext);

  console.log('language=' + language + ', color=' + color);

  const submitText = language === 'english' ? 'Submit' : 'Voorleggen';
  return <button className={`ui button ${color}`}>{submitText}</button>;
};

export default Button;
