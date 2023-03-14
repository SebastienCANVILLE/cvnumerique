import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Competence from './competence';

type TComp = {
    id: number,
    competence_clé: string
}
export default function Competences() {

    const [competence, setCompetence] = useState<TComp[]>([]);
    const [compInput, setCompInput] = useState<string>("");
    //POST request fetch inside useEffect React hooks

    const token = useContext(AuthContext).token;
    async function createCompetence() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                competence_clé: compInput
            })
        };

        const response = await fetch('http://localhost:8000/competences', requestOptions)
        const responseJson = await response.json();
        setCompetence([...competence, responseJson]);
        setCompInput("");
    };

    async function getCompetence() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch('http://localhost:8000/competences', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setCompetence(responseJson);
    };

    useEffect(() => {
        getCompetence();
    }, []);


    function deleteCompetence(id: number) {
        const newCompetence = competence.filter(item => item.id !== id)
        setCompetence(newCompetence);
    }
    const CompetenceList = competence?.map(item => <Competence del={deleteCompetence} item={item} key={item.id} />)



    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> COMPÉTENCES CLÉS</div>
                        </button>
                    </h2>

                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                        <div className="accordion-body">
                            <div className="p-2">
                                <div className="col">
                                    {CompetenceList}
                                </div>
                            </div>


                            <div className="input-group mb-3">
                                <input type='text' className="form-control" value={compInput} placeholder="Votre Soft Skill" onChange={(event) => setCompInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                <button onClick={() => createCompetence()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

