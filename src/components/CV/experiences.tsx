import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import ModificationExperience from './experience';

// Typage de la table 'experiences'
type TExperience = {
    id: number;
    intitulé_poste: string;
    entreprise: string;
    lieu: string;
    date_début: Date;
    date_fin: Date;
    descriptif: string;
}

/** Foncton qui appelle:
 * * **CreateExperience : fonction qui va utiliser le front pour faire un 'POST'.
 * * **GetExperience    : fonction qui va utiloser le front pour faire un 'GET'.
 * * **PatchExperience  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteExperience : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function Experience() {
    const [intituleInput, setIntituleInput] = useState("");
    const [entrepriseInput, setEntrepriseInput] = useState("");
    const [lieuInput, setLieuInput] = useState("");
    const [startDateInput, setStartDateInput] = useState("");
    const [endDateInput, setEndDateInput] = useState("");
    const [descriptifInput, setDescriptifInput] = useState("");

    const token = useContext(AuthContext).user?.access_token;
    const user = useContext(AuthContext).user?.user;
    console.log(user);

    const test = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;



    // Création d'une expérience : avec le 'create' du front.
    async function createExperience() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                intitulé_poste: intituleInput,
                entreprise: entrepriseInput,
                lieu: lieuInput,
                date_début: startDateInput,
                date_fin: endDateInput,
                descriptif: descriptifInput
            })
        };
        const response = await fetch('http://localhost:8000/experiences', requestOptions);
        const responseJson = await response.json();
        console.log("Success", responseJson);

        test!.user.experiences = [...test!.user.experiences, responseJson.data]
        setIntituleInput("");
        setEntrepriseInput("");
        setLieuInput("");
        setStartDateInput("");
        setEndDateInput("");
        setDescriptifInput("");
    }

    
    function resetInput()
    { // remet l'input à zéro.
        setIntituleInput("")
        setEntrepriseInput("")
        setLieuInput("")
        setStartDateInput("")
        setEndDateInput("")
        setDescriptifInput("")
        document.getElementById('close-btn')?.click()
    }


    // Récupération de toutes les expériences: avec le 'get' du front.
    /* async function GetExperience()
    {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        };
        const response = await fetch('http://localhost:8000/experiences', requestOptions);
        const responseJson = await response.json(); */

    // get error message from body or default to response status
    /* if (!response.ok)
    {
        const error = (responseJson && responseJson.message) || response.status;
        return Promise.reject(error);
    }
    console.log("Success", responseJson);

    setExperience(responseJson.experience);
}; */


    function patchExperience(item: TExperience) {
        const index = test!.user.experiences.findIndex(elm => elm.id === item.id);
        test!.user.experiences[index] = item;
        setUser({ ...test! });
    }

    function deleteExperience(id: number) {
        const experience = test!.user.experiences.filter(item => item.id !== id);
        test!.user.experiences = experience;
        console.log(test);

        setUser({ ...test! });
    }

    const listExperience = user?.experiences.map(item => <ModificationExperience del={deleteExperience} pat={patchExperience} item={item} key={item.id} />);
    console.log(listExperience);
    console.log(user);




    return (
        <div className='container mt-5'>

            {/* Récupération de toutes les informations des expériences */}
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">

                    {/*Titre dans l'entête accordéon */}
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed shadow p-3 shadow bg-body-tertiary rounded " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">EXPÉRIENCES PROFESSIONNELLES</div>
                        </button>
                    </h2>
                    {/* Récupération de toutes les expériences lors de l'effondrement */}
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <ul className="col">
                                        {listExperience}
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group"> */}

                            {/* <!-- Add button --> */}

                            <div className="input-group mb-3">

                                <input type='text' className="form-control" value={intituleInput} placeholder="Intitulé-poste" onChange={(event) => setIntituleInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <input type='text' className="form-control" value={entrepriseInput} placeholder="Entreprise" onChange={(event) => setEntrepriseInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <input type='text' className="form-control" value={lieuInput} placeholder="Lieu" onChange={(event) => setLieuInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <input type='text' className="form-control" value={startDateInput} placeholder="Date-début" onChange={(event) => setStartDateInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <input type='text' className="form-control" value={endDateInput} placeholder="Date-fin" onChange={(event) => setEndDateInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <input type='text' className="form-control" value={descriptifInput} placeholder="Descriptif" onChange={(event) => setDescriptifInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2">
                                </input>

                                <button onClick={() => createExperience()} type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}