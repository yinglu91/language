import React, { useState } from 'react';

const LanguageContext = React.createContext();

export const LanguageStore = (props) => {
  const [language, setLanguage] = useState();

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, onLanguageChange }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

// conponents's FC:
// import LanguageContext from '../contexts/LanguageContext'
// import {LanguageStore} from '../contexts/LanguageContext'
