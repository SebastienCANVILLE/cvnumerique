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
import './cv.css';



export default function CvAccueil()
{

    return (

        <div className="CvAccueil">

            <div className="imageCV">
                <img src="/photos/FondEcranCV.jpg" className="bg-img" img-fluid></img>
            </div>


            <Navbar></Navbar>
            <ProfilCv></ProfilCv>

            <Presentation></Presentation>
            <Formation></Formation>
            <Experience></Experience>
            <Technique></Technique>
            <Fonctionnelle></Fonctionnelle>
            <Competence></Competence>
            <Langue></Langue>
            <CentreInteret></CentreInteret>


        </div>


    )

}