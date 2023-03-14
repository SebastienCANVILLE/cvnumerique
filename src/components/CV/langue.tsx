import { useEffect, useState } from "react";

// Typage de la table 'langues'
type TLangue = {
    id: number;
    langue: string;
    niveau: string;
}



/** Foncton qui appelle:
 * * **PatchLangue  : fonction qui va utiliser le front pour faire un 'PATCH'.
 * * **DeleteLangue : fonction qui va utiliser le front pour faire un 'DELETE'.
 */
export default function ModificationLangue(props: any)
{
    console.log(props);

    const [ langue, setLangue ] = useState<TLangue[]>([]);
    const [ langueInput, setLangueInput ] = useState("");
    const [ niveauInput, setNiveauInput ] = useState("");

    // Modification d'une langue : avec le 'patch' du front.
    async function PatchLangue()
    {

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            },
            body: JSON.stringify({
                langue: langueInput,
                niveau: niveauInput
            })
        };
        const response = await fetch('http://localhost:8000/langues/:id', requestOptions)
        const responseJson = await response.json();

        console.log('success', responseJson);

        setLangue(responseJson.data);
    };





    // Suppression d'une langue : avec le 'delete' du front.
    async function DeleteLangue()
    {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            }
        };

        const response = await fetch('http://localhost:8000/langues/:id', requestOptions);
        const responseJson = await response.json();

        console.log('success', responseJson);

        setLangue(responseJson.data);
    };


    useEffect(() =>
    {
        DeleteLangue();
    }, []);


    return (
        <div className="container">

            <div className="row">

                {/* colone qui affiche la langue */}
                <li className="col">
                    {props.item.langue} {"  : "}
                </li>

                {/* colone qui affiche le niveau */}
                <div className="col">
                    {props.item.niveau}
                </div>


                {/* colone qui affiche les deux boutons  */}
                <div className="col">

                {/* bouton modifier */}
                    <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                        <i className="bi bi-pencil"></i>
                    </button>

                {/* bouton supprimer */}
                    <button type="button" className="btn btn-outline-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                        <i className="bi bi-trash3"></i>
                    </button>

                </div>

            </div>

        </div>
    );
}