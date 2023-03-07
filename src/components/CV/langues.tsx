import { useEffect, useState } from "react";

// Typage de la table 'langues'
type TLangue = {
    id: number;
    langue: string;
    niveau: string;
    user: {}
}



/** Foncton qui appelle:
 * * **CreateLangue : fonction qui va utiliser le front pour faire un 'POST'.
 * * **GetLangue    : fonction qui va utiloser le front pour faire un 'GET'.
 * * **PatchLangue  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteLangue : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function Langue()
{
    const [ langue, setLangue ] = useState<TLangue | undefined>();
    const [ niveau, SetNiveau ] = useState<TLangue | undefined>();
    const [ langueInput, setLangueInput ] = useState("");
    const [ niveauInput, SetNiveauInput ] = useState("");

    const body = {
        langue: langueInput,
        niveau: niveauInput
    }



    // Création d'une langue : avec le 'create' du front.
    async function CreateLangue()
    {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch('http://localhost:8000/langues',/*{ method: "POST" }*/ requestOptions);
        const responseJson = await response.json();

        if (!response.ok)
        {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success", responseJson);

        setLangue(responseJson.langue);
        SetNiveau(responseJson.niveau);
    }



    // Récupération de tous les langages: avec le 'get' du front.
    async function getLangue()
    {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch('http://localhost:8000/langues',/*{ method: "GET" }*/ requestOptions);
        const responseJson = await response.json();

        if (!response.ok)
        {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success", responseJson);

        setLangue(responseJson.langue);
        SetNiveau(responseJson.niveau);
    }



    // Modification d'une langue : avec le 'patch' du front.
    async function PatchLangue()
    {

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch('http://localhost:8000/langues/',/*{ method: "PATCH" }*/ requestOptions)
        const responseJson = await response.json();

        if (!response.ok)
        {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response
                .status;
            return Promise.reject(error);
        }
        console.log('success', responseJson);
        setLangue(responseJson.langue);
        SetNiveau(responseJson.niveau);
    };



    // Suppression d'une langue : avec le 'delete' du front.
    async function DeleteLangue()
    {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Autorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            }
        };

        const response = await fetch('http://localhost:8000/langues/',/*{ method: "DELETE" }*/ requestOptions);
        const responseJson = await response.json();

        if (!response.ok)
        {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response
                .status;
            return Promise.reject(error);
        }
        console.log('success', responseJson);

        setLangue(responseJson.langue);
        SetNiveau(responseJson.niveau);
    };


    useEffect(() =>
    {
        getLangue();
    }, []);



    ///////////////////////return du 'GET'

    /* return (
        <div>
            <div className="card text-center m-3">
                <h5 className="card-title">Connaissance d'une langue</h5>
                <h5 className="card-header">{langues?.langue}</h5>
                <input type='text' onChange={(event) => setLanguesInput(event.target.value)}></input>
                
                <h5 className="card-title">Mon niveau de connaissance de la langue:</h5>
                <h5 className="card-header"> {langues?.niveau} </h5>
                <input type='text' onChange={(event) => SetNiveauInput(event.target.value)}></input>
                <button onClick={fetchData}>Valider</button>
            </div>
        </div>
    );
} */
    return (
        <div className="container mt-5">

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">

                    {/* <!-- Bouton de défilement --> */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                            LANGUE</button>
                    </h2>

                    <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">

                        <div className="btn-addupd d-flex justify-content-end">

                            {/* <!-- Bouton + add --> 
                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Eight group">     A supprimer
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

                        {/* <!-- Bouton delete--> */}
                        <div className="btn-del d-flex justify-content-end">
                            <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group"> 
                                <button type="button" className="btn btn-outline-dark mb-2">S</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Langue }
