import React, { useState } from 'react';
import UserCreate from './UserCreate';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className="ui container">
      <div>
        Select alanguage:
        <i className="flag us" onClick={() => setLanguage('english')} />
        <i className="flag nl" onClick={() => setLanguage('dutch')} />
      </div>

      <UserCreate />
    </div>
  );
};

export default App;
