import { useState, useEffect } from 'react';

type TComp = {
    id: number;
    competence_clé: string;
    user: {}
}
export default function Competence() {

    const [competence, setCompetence] = useState<TComp | undefined>();
    const [compInput, setCompInput] = useState("")
    //POST request fetch inside useEffect React hooks

    async function fetchData() {
        const body = {
            competence_clé: compInput
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/competences', requestOptions)
        const responseJson = await response.json();
        setCompetence(responseJson);
    }


    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        <div className= "position-absolute top-50 start-50 translate-middle text-center"> COMPETENCES CLES</div>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing
                            and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also
                            worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                        <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                            </button>
                            <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger btn-rounded-floating" data-mdb-ripple-color="dark" >
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


    {/* <div>
            <div className="card text-center m-3">
            <h4>Compétences_Clés</h4>
                <h5 className="card-header">{competence?.competence_clé}</h5>

                <input type='text' onChange={(event) => setCompInput(event.target.value)}></input>
                <button onClick={fetchData}>Valider</button>
            </div>
        </div> */}




};



