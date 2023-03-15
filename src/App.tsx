import { useState } from 'react';
import Accueil from './components/Accueil/accueil';
import CvAccueil from './components/CV/cvAccueil';
import { AuthContext, Tuser } from './context/authContext';

function App() {

  const [user, setUser] = useState<Tuser | null>(null);
  
  return (

    <AuthContext.Provider value={{
      user: user,
      setUser: setUser
      }}>

      {user === null && <Accueil></Accueil>}
      {user !== null && <CvAccueil></CvAccueil>}

    </AuthContext.Provider>

  );
}

export default App;


