import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './cv.css' 


export default function ProfilCv() {

    const token = useContext(AuthContext).user?.access_token;





    return (
        <div className="container mt-5 ">

            <div className="bg-body rounded-4 text-center" >

                <img className="img-fluid rounded-4" src="/photos/photoEcranLog.jpg" style={{ height: "32vh", width: "100vw" }}></img>


                <div className="row rounded-4 text-center" id=" image-profil">
                    <div className="col">
                        IMAGE PROFIL
                    </div>
                </div>

                <div className="row rounded-4 text-center" id="profil-name">
                    <div className="col">
                        Aliénor JSON
                    </div>
                </div>

                <div className="row rounded-4 text-center " id="profil-social">
                    <div className="col">
                        CHEF DE PROJET
                    </div>
                </div>

                <div className="row rounded-4 text-center" id="profil-job">
                    <div className="col">
                        Développeur Web et Web Mobile
                    </div>
                </div>

                <div className="row rounded-4 text-center" id="profil-cityRegion">
                    <div className="col">
                        Bordeaux, Nouvelle-Aquitaine
                    </div>
                </div>

                <div className="row rounded-4 text-center" id="profil-emailAndPhone">
                    <div className="col">
                        alienor.json@seb.fr / 06.66.66.66.66
                    </div>
                </div>
            </div>
        </div>
    )

}

