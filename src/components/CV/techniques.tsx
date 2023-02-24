import { useState, useEffect } from 'react';

type TTech = {
    id: number;
    libelle: string;
    user: {}
}

export default function CreateTechnique() {
    const [technique, setTechnique] = useState<TTech | undefined>();
    const [techInput, setTechInput] = useState("")

    // useEffect(() => {
        async function fetchData() {
            const body = {
                libelle: techInput
            }

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MjQ3NDg0LCJleHAiOjE2ODIyNDc0ODR9.XUDUNkBZiqT3fUmdn9IDW5K2kb2BegVxDZpMMNUQ_U4'
                },
                body: JSON.stringify(body)
            };

            const response = await fetch('http://localhost:8000/techniques', /*{ method: "POST" }*/requestOptions);
            const responseJson = await response.json();
            console.log(responseJson);

            setTechnique(responseJson);
            console.log(technique);
            
        }
        // fetchData();
    // }, []);

    return (
        <div>
        <div className="card text-center m-3">
            <h5 className="card-header">{technique?.libelle}</h5>
            <input type='text' onChange={(event) => setTechInput(event.target.value)}></input>
            <button onClick={fetchData}>Valider</button>
        </div>
        </div>
    );


}
export { CreateTechnique };