import { useState } from "react";

type TLangues = {
    id: number;
    langue: string;
    niveau: string;
    user: {}
}

export default function CreateLangue () {
    const [langues, setLangues] = useState <TLangues |undefined > ();
    const [languesInput, setLanguesInput] = useState ("");

    async function fetchData() {
        const body = {
            langue: languesInput
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNBTkRSSU5FQGdtYWlsLmZyIiwic3ViIjoxNywiaWF0IjoxNjc2OTkzNzk4LCJleHAiOjE2ODE5OTM3OTh9.kHWzfvF0s4Wyb_x8COEX9p344z2SG63EoZ5KJ9uv21o'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch ('http://localhost:8000/langues', requestOptions);
        const responseJson = await response.json();
        console.log(responseJson);

        setLangues(responseJson);
        console.log(langues);
    }

    return (
        <div>
            <div className="card text-center m-3">
                <h5 className="card-header">{langues?.langue}</h5>
                <input type='text' onChange={(event) => setLanguesInput(event.target.value)}></input>
                <button onClick={fetchData}>Valider</button>
            </div>
        </div>
    );
}