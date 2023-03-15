import { createContext } from "react";

export type Tuser = {
    user: {
        id: number,
        email: string,
        telephone: string,
        firstname: string,
        lastname: string,
        poste_actuel: string,
        classe_professionnelle: string,
        ville_affectation: string,
        region_affectation: string,
        photo: string,
        role: string,
        presentation: string,
        experiences: [],
        competences: { id: number, competence_clé: string }[],
        formations: { id: number, specialite: string, diplôme: string, date_obtention: Date }[],
        langues: {
            id: number,
            langue: string,
            niveau: string
        }[],

        centres_interets: {
            id: number,
            intitule: string
        }[],
        fonctionnelles: { id: number, libelle: string }[],
        techniques: { id: number, libelle: string }[],
    },
    access_token: string
}


export interface IAuthContext {
    user: Tuser | null;
    setUser: (user:Tuser | null) => void;
}

// Pour créer du contexte, vous devez importer createContext et l’initialiser :
export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => { },

})











/* export default function AuthProvider() {

    const [token, setToken] = useState();
  
function SubmitLogin(){
    setToken(token)  


    return (
      <AuthContext.Provider value={token}>

        
      </AuthContext.Provider>
    );
  } */