import { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext';

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

/**Foncton qui appelle:
 * * **PatchExperience  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteExperience : fonction qui va utiliser le front pour faire un 'DELETE'. */
export default function ModificationExperience(props: any)
{
    console.log(props);

    const [ experience, setExperience ] = useState<TExperience[]>([]);
    /* const [ experienceInput, setExperienceInput ] = useState(""); */
    const [ intituleInput, setIntituleInput ] = useState("");
    const [ entrepriseInput, setEntrepriseInput ] = useState("");
    const [ lieuInput, setLieuInput ] = useState("");
    const [ startDateInput, setStartDateInput ] = useState("");
    const [ endDateInput, setEndDateInput ] = useState("");
    const [ descriptifInput, setDescriptifInput ] = useState("");

    const [ showInput, setShowInput ] = useState(false)

    const token = useContext(AuthContext).user?.access_token;



    // Modification d'une expérience : avec le 'patch' du front.
    async function PatchExperience()
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
        const response = await fetch(`http://localhost:8000/experiences/${props.item.id}`, requestOptions)
        const responseJson = await response.json();

        console.log('success', responseJson);

        if (responseJson.statusCode === 200)
        {
            props.pat(props.item.id)
        }

        setExperience(responseJson.data);
    };



    // Suppression d'une expérience : avec le 'delete' du front.
    async function DeleteExperience()
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

        setExperience(responseJson.data);
    };

    function update()
    {
        setShowInput(true)
    }


    return (
        <div className="container">

            <div className="row">

                <li className="col">
                    {props.item?.intitulé_poste}
                </li>

                <li className="col">
                    {props.item?.date_début} {" / "} {props.item?.date_fin}
                </li>

                <div className="col">
                    {props.item?.entreprise}
                </div>

                <div className="col">
                    {props.item?.lieu}
                </div>

                <div className="col">
                    {props.item?.descriptif}
                </div>


                {showInput && <li>
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

                    <button onClick={PatchExperience}>Valider</button>
                </li>}




                {/* colone qui affiche les deux boutons  */}
                <div className="col">
                    
                    <div className="btn-group mb-2 mt-2 ms-5" role="group" aria-label="Third group">

                        {/* bouton modifier */}
                        <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-pencil"></i>
                        </button>

                        {/* bouton supprimer */}
                        <button onClick={DeleteExperience} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );


}