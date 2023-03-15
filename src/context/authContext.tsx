import { createContext } from "react";

export interface IAuthContext {
    token: string | null;
    setToken: (token: string | null) => void;
}

// Pour créer du contexte, vous devez importer createContext et l’initialiser :
export const AuthContext = createContext<IAuthContext>({
    token: null,
    setToken: () => { },

})











/* export default function AuthProvider() {

    const [token, setToken] = useState("");
  
function SubmitLogin(){
    setToken(token)  


    return (
      <AuthContext.Provider value={token}>

        
      </AuthContext.Provider>
    );
  } */