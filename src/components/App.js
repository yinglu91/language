import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className="ui container">
      <div>
        Select alanguage:
        <i className="flag us" onClick={() => setLanguage('english')} />
        <i className="flag nl" onClick={() => setLanguage('dutch')} />
      </div>

      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
