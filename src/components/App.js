import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

const App = () => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <UserCreate />
      </LanguageStore>
    </div>
  );
};

export default App;
