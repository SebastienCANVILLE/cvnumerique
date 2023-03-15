import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';


export default function ProfilCv() {

    const token = useContext(AuthContext).user?.access_token;
    return (
        <div className="container mt-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">

                    {/* <!-- Bouton de défilement --> */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            PROFIL
                        </button>
                    </h2>

                    {/* <!-- Bouton + add --> */}
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                        <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-outline-dark mb-2">+</button>
                        </div>

                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

