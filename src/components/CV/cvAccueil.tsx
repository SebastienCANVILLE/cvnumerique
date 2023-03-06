import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experience from "./experiences";
import CentreInteret from "./centresInterets";
import Fonctionnelle from "./fonctionnelles";
import Formation from "./formations";
import Langue from "./langues";
import Navbar from "./navbar";
import Technique from "./techniques";
import Competence from "./competences";

export default function CvAccueil () {

    return(
    <div>
    <ProfilCv></ProfilCv>
    <Presentation></Presentation>
    </div>
)
}