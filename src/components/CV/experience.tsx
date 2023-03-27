import { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext';



/**Foncton qui appelle:
 * * **PatchExperience  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteExperience : fonction qui va utiliser le front pour faire un 'DELETE'. */
export default function ModificationExperience(props: any)
{

    /* const [ experienceInput, setExperienceInput ] = useState(""); */
    const [ intituleInput, setIntituleInput ] = useState<string>("");
    const [ entrepriseInput, setEntrepriseInput ] = useState<string>("");
    const [ lieuInput, setLieuInput ] = useState<string>("");
    const [ startDateInput, setStartDateInput ] = useState<string>("");
    const [ endDateInput, setEndDateInput ] = useState<string>("");
    const [ descriptifInput, setDescriptifInput ] = useState<string>("");

    const [ showInput, setShowInput ] = useState(false)

    const token = useContext(AuthContext).user?.access_token;



    // Modification d'une expérience : avec le 'patch' du front.
    async function patchExperience()
    {

        const requestOptions = {
            method: 'PATCH',
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
        const response = await fetch(`http://localhost:8000/experiences/${props.item.id}`, requestOptions);
        const responseJson = await response.json();
        console.log('success', responseJson);

        if (responseJson.statusCode === 200)
        {
            props.pat(responseJson.data);
            setShowInput(false);
        }


    };



    // Suppression d'une expérience : avec le 'delete' du front.
    async function deleteExperience()
    {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };

        const response = await fetch(`http://localhost:8000/experiences/${props.item.id}`, requestOptions);
        const responseJson = await response.json();
        console.log('success', responseJson);

        if (responseJson.statusCode === 200)
        {

            props.del(props.item.id)
        };
    };

    function update()
    {
        setShowInput(true)
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

    function handleCancel()
    { // annul l'opération
        setIntituleInput(intituleInput)
        setEntrepriseInput(entrepriseInput)
        setLieuInput(lieuInput)
        setStartDateInput(startDateInput)
        setEndDateInput(endDateInput)
        setDescriptifInput(descriptifInput)
        setShowInput(false)
        resetInput()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills fw-bold">
                        {props.item?.intitulé_poste}
                    </li>
                    <p className="formation_item formation_item degree-info ps-4">
                        {props.item?.entreprise}
                    </p>
                    <p className="formation_item formation_item degree-info ps-4">
                        {props.item?.lieu}
                    </p>
                    <p className="formation_item formation_item degree-info ps-4">
                        <time>
                            {props.item?.date_début} {" / "} {props.item?.date_fin}
                        </time>
                    </p>
                    <p  className="formation_item formation_item degree-info ps-4">
                        {props.item?.descriptif}
                    </p>
                    {showInput && <div>
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

                        <button onClick={patchExperience} type="button" className="btn btn-outline-primary btn-rounded-floating ms-1" data-mdb-ripple-color="dark"><i className="bi bi-check"></i></button>

                        <button onClick={handleCancel} type="button" className="btn btn-outline-secondary btn-rounded-floating ms-1" data-mdb-ripple-color="dark"><i className="bi bi-x"></i></button>
                    </div>}
                </div>

                {/* colone qui affiche les deux boutons  */}
                <div className="col">

                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">
                        {/* bouton modifier */}
                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>
                        {/* bouton supprimer */}
                        <button onClick={deleteExperience} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}