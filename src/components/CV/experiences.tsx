import { useEffect, useState } from 'react';

// Typage de la table 'experiences'
type TExperience = {
    id: number;
    intitulé_poste: string;
    entreprise: string;
    lieu: string;
    date_début: Date;
    date_fin: Date;
    descriptif: string;
    user: {}
}

/** Foncton qui appelle:
 * * **CreateExperience : fonction qui va utiliser le front pour faire un 'POST'.
 * * **GetExperience    : fonction qui va utiloser le front pour faire un 'GET'.
 * * **PatchExperience  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteExperience : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function Experience() {
    const [ experience, setExperience ] = useState <TExperience | undefined> ();
    const [ experienceInput, setExperienceInput ] = useState("");

    const body = {
        intitulé_poste: experienceInput,
        entreprise: experienceInput,
        lieu: experienceInput,
        date_début: experienceInput,
        date_fin: experienceInput,
        descriptif: experienceInput
    }

    // Création d'une expérience : avec le 'create' du front.
    async function CreateExperience()
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

        setExperience(responseJson);
    }



    // Récupération de toutes les expériences: avec le 'get' du front.
    async function GetExperience()
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

        setExperience(responseJson.langue);
    };







    return (


        <div className='container mt-5'>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Expérience Pro
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-info justify-content-end">+</button>
                    </div>
                </div>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>
    )
}