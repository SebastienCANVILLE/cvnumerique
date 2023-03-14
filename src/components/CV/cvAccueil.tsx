import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experience from "./experiences";
import CentreInterets from "./centresInterets";
import Fonctionnelles from "./fonctionnelles";
import Formations from "./formations";
import Langue from "./langues";
import Navbar from "./navbar";
import Competences from "./competences";
import Techniques from "./techniques";
import './cv.css';





export default function CvAccueil() {

    return (

        <div className="CvAccueil">

            <Navbar></Navbar>
            <div className="container" id="containerAccueil">

                <ProfilCv></ProfilCv>

                <Presentation></Presentation>
                <Formations></Formations>
                <Experience></Experience>
                <Techniques></Techniques>
                <Fonctionnelles></Fonctionnelles>
                <Competences></Competences>
                <Langue></Langue>
                <CentreInterets></CentreInterets>


            </div>
        </div>


    )

}