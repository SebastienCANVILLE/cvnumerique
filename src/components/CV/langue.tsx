import { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext';




/** Foncton qui appelle:
 * * **PatchLangue  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteLangue : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function ModificationLangue(props: any)
{

    /*  const [ langue, setLangue ] = useState<TLangue[]>([]); */
    const [ langueInput, setLangueInput ] = useState("");
    const [ niveauInput, setNiveauInput ] = useState("");
    const [ showInput, setShowInput ] = useState(false)


    const token = useContext(AuthContext).user?.access_token;

    // Modification d'une langue : avec le 'patch' du front.
    async function PatchLangue()
    {

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                langue: langueInput,
                niveau: niveauInput
            })
        };

        const response = await fetch(`http://localhost:8000/langues/${props.item.id}`, requestOptions)
        const responseJson = await response.json();
        console.log('success', responseJson);

        if (responseJson.statusCode === 200)
        {
            props.patch(responseJson.data)
            resetInput();
            setShowInput(false);

        }

        /* setUser({ ...test! }); */
    };

    // Suppression d'une langue : avec le 'delete' du front.
    async function DeleteLangue()
    {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };

        const response = await fetch(`http://localhost:8000/langues/${props.item.id}`, requestOptions);
        const responseJson = await response.json();

        console.log('success', responseJson);

        if (responseJson.statusCode === 200)
        {

            props.del(props.item.id)
        };
    };

    function update()
    { //déclenche l'ouverture de l'input.
        setShowInput(true)
    }


    async function resetInput()
    { //remet l'input à zéro
        setLangueInput("")
        setNiveauInput("")
        document.getElementById('close-btn')?.click()
    }

    function handleCancel()
    { //annul l'opération
        setLangueInput(langueInput)
        setNiveauInput(niveauInput)
        setShowInput(false);
        resetInput()
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <li className="hardSkills fw-bold">
                        {props.item?.langue}
                    </li>
                    <p className="col">
                        {props.item?.niveau}
                    </p>
                    {showInput && <li>
                        <hr/>
                        <input type='text' className="form-control" value={langueInput} placeholder="Saisir votre langue" onChange={(event) => setLangueInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <input type='text' className="form-control" value={niveauInput} placeholder="Saisir votre niveau" onChange={(event) => setNiveauInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button onClick={PatchLangue} type="button" className="btn btn-outline-primary btn-rounded-floating ms-1" data-mdb-ripple-color="dark"><i className="bi bi-check"></i></button>
                        <button onClick={handleCancel} type="button" className="btn btn-outline-secondary btn-rounded-floating ms-1" data-mdb-ripple-color="dark"><i className="bi bi-x"></i></button>
                    </li>}
                </div>
                    <div className="col">
                        <div className="btn-group mb-2 mt-2 ms-5 float-md-end" role="group" aria-label="Third group">
                            <button onClick={update} type="button" className="btn btn-outline-warning btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button onClick={DeleteLangue} type="button" className="btn btn-outline-danger btn-rounded-floating ms-1" data-mdb-ripple-color="dark" >
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}