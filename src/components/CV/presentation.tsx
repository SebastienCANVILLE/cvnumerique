


export default function Presentation() {







    return (

        <div className="container mt-5">

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">

                    {/* <!-- Bouton de défilement --> */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            PRESENTATION
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                        <div className="btn-addupd d-flex justify-content-end">

                            {/* <!-- Bouton + add --> 
                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">     A supprimer
                                <button type="button" className="btn btn-outline-dark mb-2">+</button>
                            </div> */}

                            {/* <!-- Bouton Update --> */}
                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                                <button type="button" className="btn btn-outline-dark mb-2">/</button>
                            </div>

                        </div>

                        {/* <!-- Partie texte présentation --> */}
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>

                        {/* <!-- Bouton delete--> 
                        <div className="btn-del d-flex justify-content-end">
                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">     Pas de delete
                                <button type="button" className="btn btn-outline-dark mb-2">S</button>
                            </div>*/}

                    </div>

                </div>

            </div>
        </div>
        /* </div >   pour le add       */
        /* </div >   pour le delete       */



    )
}