import { useEffect, useState } from "react";

// Typage de la table 'langues'
type TLangue = {
    id: number;
    langue: string;
    niveau: string;
}



/** Foncton qui appelle:
 * * **CreateLangue : fonction qui va utiliser le front pour faire un 'POST'.
 * * **GetLangue    : fonction qui va utiloser le front pour faire un 'GET'.
 * * **PatchLangue  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteLangue : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function Langue()
{
    const [ langue, setLangue ] = useState < TLangue [] | undefined> ([]);
    const [ langueInput, setLangueInput ] = useState("");

    /* const body = {
        langue: langueInput,
        niveau: langueInput
    } */



    // Création d'une langue dans la BDD.
    async function CreateLangue()
    {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify({
                langue: langueInput,
                niveau: langueInput
            })
        };
        const response = await fetch('http://localhost:8000/langues', requestOptions);
        const responseJson = await response.json();

        console.log("Success", responseJson);

        setLangue(responseJson);
    }



    // Récupération de toutes les langues dans la BDD.
    async function GetLangue()
    {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            }
        };
        const response = await fetch('http://localhost:8000/langues', requestOptions);

        const responseJson = await response.json();

        console.log("Success", responseJson);

        setLangue(responseJson.langue);
    }



    /* // Modification d'une langue : avec le 'patch' du front.
    async function PatchLangue()
    {

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODExMzgwOSwiZXhwIjoxNjgzMTEzODA5fQ.SGeVdA_5QzUAfYmwy8dYn0MueTm6p6f7mVsbuGKReys'
            },
            body: JSON.stringify({
        langue: langueInput,
        niveau: langueInput
    })
        };
        const response = await fetch('http://localhost:8000/langues/', requestOptions)
        const responseJson = await response.json();

        console.log('success', responseJson);

        setLangue(responseJson.langue);
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

        const response = await fetch('http://localhost:8000/langues/', requestOptions);
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
    }; */


    useEffect(() =>
    {
        GetLangue();
    }, []);

    const listLangue = langue?.map((item) => (
        <li>
            <p> {item.langue} </p>
            <p> {item.niveau} </p>
        </li>
    ))



    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        <div className= "position-absolute top-50 start-50 translate-middle text-center"> LANGUES</div>
                            </button>
                    </h2>
                    {/* Récupération de toutes les langues */}
                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
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
                                <h5 className="card-header">{langue?.langue}</h5>
                                <h5 className="card-header">{langue?.niveau}</h5>
                                <input type='text' onChange={(event) => setLangueInput(event.target.value)}></input>
                                <button onClick={CreateLangue}>Valider</button>
                            </button>

                            {/* <!-- Update button --> */}
                            <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-pencil"></i>
                            </button>

                            {/* <!-- Delete button --> */}
                            <button type="button" className="btn btn-outline-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Langue }
