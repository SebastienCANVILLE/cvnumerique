import { useState, useEffect } from 'react';


/* //création d'un composant technique qui permet d'afficher une technique , recoit des props et chaque props sera l'équivalent d'un objet technique

//affichage technique
//insertion boutons associés
//requêtes update et delete */


export default function Technique() {
    


    return (

        <div>
            <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                <i className="bi bi-pencil"></i>
                <button type="button" className="btn btn-outline-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                    <i className="bi bi-trash3"></i>
                </button>
            </button>

        </div>
    )
}