import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experience from "./experiences";
import CentreInteret from "./centresInterets";
import Fonctionnelle from "./fonctionnelles";
import Formation from "./formations";
import Langue from "./langues";
import Navbar from "./navbar";
import Competence from "./competences";
import Technique from "./techniques";



export default function CvAccueil() {

    return (<div className="CvAccueil">
        {/*    <Navbar></Navbar> */}
        <ProfilCv></ProfilCv>

        <div className="accordion" id="accordionPanelsStayOpenExample">
            <Formation></Formation>
            <Experience></Experience>
            <Technique></Technique>
            <Fonctionnelle></Fonctionnelle>
            <Competence></Competence>
            <Langue></Langue>
            <CentreInteret></CentreInteret>

        </div>


    </div>)

}
