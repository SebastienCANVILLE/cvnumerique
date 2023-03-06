import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experience from "./experiences";
import CentreInteret from "./centresInterets";
import Fonctionnelle from "./fonctionnelles";
import Formation from "./formations";
import Langue from "./langues";
import Navbar from "./navbar";
import Competence from "./competences";
<<<<<<< HEAD
import CreateTechnique from "./techniques";
import CreateLangue from "./langues";
=======
import Technique from "./techniques";
>>>>>>> 9374642eb95dcc7fffb45fe0906ac0ebd296028f


<<<<<<< HEAD
    <CreateTechnique></CreateTechnique> 
    <CreateLangue></CreateLangue>
=======

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

>>>>>>> 9374642eb95dcc7fffb45fe0906ac0ebd296028f

    </div>)

}