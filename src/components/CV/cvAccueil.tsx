import Presentation from "./presentation";
import ProfilCv from "./profil";
import Experiences from "./experiences";
import CentreInterets from "./centresInterets";
import Fonctionnelles from "./fonctionnelles";
import Formations from "./formations";
import Langues from "./langues";
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
                <Experiences></Experiences>
                <Techniques></Techniques>
                <Fonctionnelles></Fonctionnelles>
                <Competences></Competences>
                <Langues></Langues>
                <CentreInterets></CentreInterets>


            </div>
        </div>


    )

}