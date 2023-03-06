import React from 'react';
import {Routes, Route} from "react-router-dom";
import CvAccueil from './components/CV/cvAccueil';

function App() {
  return (
    <>
    <Routes>

    <Route path = "/" element = {<CvAccueil />}/> {/* element que l'on trouve à la racine */}

    </Routes>
  

      
    </>
  );
}

export default App;
