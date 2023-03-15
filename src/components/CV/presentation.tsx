import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Presentation() {


    const token = useContext(AuthContext).user?.access_token;





    return (

        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <span className="position-absolute top-50 start-50 translate-middle text-center">PRÉSENTATION</span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element. These classes control the overall appearance, as well as the
                            showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                        <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">
                            {/* <!-- Add button --> */}
                            <button type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                            </button>
                            {/* <!-- Update button --> */}
                            <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-pencil"></i>
                            </button>
                            {/* <!-- Delete button --> */}
                            <button type="button" className="btn btn-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-key-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        /* </div >   pour le delete       */



    )
}