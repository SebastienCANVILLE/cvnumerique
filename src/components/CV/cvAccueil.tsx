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
import { Link } from "react-router-dom";



export default function CvAccueil() {

    return (

        <div className="CvAccueil">

            <Navbar></Navbar>
            <div className="container" id ="containerAccueil">
             {/*    <div className="Items"> */}

                    <ProfilCv></ProfilCv>

                    <Presentation></Presentation>
                    <Formation></Formation>
                    <Experience></Experience>
                    <Technique></Technique>
                    <Fonctionnelle></Fonctionnelle>
                    <Competence></Competence>
                    <Langue></Langue>
                    <CentreInteret></CentreInteret>
                {/* </div> */}

            </div>
        </div>


    )

}