import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './cv.css'


export default function ProfilCv() {

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;

    const lastname = useContext(AuthContext).user?.user.lastname;
    const firstname = useContext(AuthContext).user?.user.firstname;
    const classe_professionnelle = useContext(AuthContext).user?.user.classe_professionnelle;
    const poste_actuel = useContext(AuthContext).user?.user.poste_actuel;
    const ville_affectation = useContext(AuthContext).user?.user.ville_affectation;
    const region_affectation = useContext(AuthContext).user?.user.region_affectation;
    const email = useContext(AuthContext).user?.user.email;
    const telephone = useContext(AuthContext).user?.user.telephone;



    return (
        <div className="container-profil mt-5 ">

            <div className="bg-body rounded-4 text-center ms-1 me-1" >

                <div className="row">
                    <div className="col-12 imgcvbgprofil">
                        <img className="img-fluid rounded-4 w-100 " src="/photos/photoEcranLog.jpg" style={{ height: "50vh" }}></img>
                    </div>
                    <div className="col-12 imgcvprofil">
                        <img className="photo_profil col-12 img-thumbnail rounded-circle" src="/photos/Photo_profil.jpg" style={{ width: "170px", height: "170px" }} />
                    </div>
                </div>


                <div className="row rounded-4 text-center mt-5" id="profil-name">
                    <div className="col">
                        <h1>{lastname} {firstname}</h1>
                    </div>
                </div>

                <div className="row rounded-4 text-center mt-3 text-danger" id="profil-social">
                    <div className="col">
                        <h5>{classe_professionnelle}</h5>
                    </div>
                </div>

                <div className="row rounded-4 text-center mt-1" id="profil-job">
                    <div className="col">
                        <h5>{poste_actuel}</h5>
                    </div>
                </div>

                <div className="row rounded-4 text-center mt-4 text-secondary" id="profil-cityRegion">
                    <div className="col">
                        {ville_affectation}, {region_affectation}
                    </div>
                </div>

                <div className="row rounded-4 text-center mt-1 text-secondary" id="profil-emailAndPhone">
                    <div className="col">
                        {email} / {telephone}
                    </div>
                </div>
            </div>
        </div >

    )

}

