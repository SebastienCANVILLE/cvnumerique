import { useState } from 'react';
import Accueil from './components/Accueil/accueil';
import CvAccueil from './components/CV/cvAccueil';
import { AuthContext } from './context/authContext';

function App() {

  const [token, setToken] = useState<string | null>(null);
  
  return (
    
    <AuthContext.Provider value={{
      token: token,
      setToken: setToken
      }}>

      {token === null && <Accueil></Accueil>}
      {token !== null && <CvAccueil></CvAccueil>}

    </AuthContext.Provider>

  );
}

export default App;


