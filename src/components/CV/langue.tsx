import { useState } from "react";

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
export default function ModificationLangue()
{
    const [ langue, setLangue ] = useState<TLangue[] | undefined>([]);
    const [ langueInput, setLangueInput ] = useState("");
    const [ niveauInput, setNiveauInput ] = useState("");

    // Modification d'une langue : avec le 'patch' du front.
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
                niveau: niveauInput
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

        console.log('success', responseJson);

        setLangue(responseJson);
    };

    return (
        <div></div>
    );
}