import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experience from "./experiences";
import CentreInterets from "./centresInterets";
import Fonctionnelle from "./fonctionnelles";
import Formation from "./formations";
import Langue from "./langues";
import Navbar from "./navbar";
import Competence from "./competences";
import Techniques from "./techniques";
import './cv.css';





export default function CvAccueil() {

    return (

        <div className="CvAccueil">

            <Navbar></Navbar>
            <div className="container" id="containerAccueil">
                {/*    <div className="Items"> */}

                <ProfilCv></ProfilCv>

                <Presentation></Presentation>
                <Formation></Formation>
                <Experience></Experience>
                <Techniques></Techniques>
                <Fonctionnelle></Fonctionnelle>
                <Competence></Competence>
                <Langue></Langue>
                <CentreInterets></CentreInterets>
                {/* </div> */}

            </div>
        </div>


    )

}