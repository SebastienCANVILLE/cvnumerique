import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Technique from './technique';

type TTech = {
    id: number,
    libelle: string
}

export default function Techniques() {

    const [technique, setTechnique] = useState<TTech[]>([]);//array qui contient des techniques
    const [techInput, setTechInput] = useState<string>("");

    const token = useContext(AuthContext).token;


    async function createTechnique() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                libelle: techInput
            })
        };
        const response = await fetch('http://localhost:8000/techniques', /*{ method: "POST" }*/requestOptions);
        const responseJson = await response.json();
        console.log("Success!", responseJson);
        setTechnique([...technique, responseJson]);
        setTechInput("");
    };


    async function getTechnique() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch('http://localhost:8000/techniques', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setTechnique(responseJson);
    };

    useEffect(() => {
        getTechnique();
    }, []);


    function deleteTechnique(id: number) {
        const newTechnique = technique.filter(item => item.id !== id)
        setTechnique(newTechnique);
    }
    const listTechnique = technique?.map(item => <Technique del={deleteTechnique} item={item} key={item.id} />)


    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <div className="position-absolute top-50 start-50 translate-middle text-center">  COMPÉTENCES TECHNIQUES</div>
                        </button>
                    </h2>
                    {/* <!-- Get All Compétences Techniques --> */}
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {listTechnique}
                                    </div>
                                </div>

                                {/* <!-- Add Technique button --> */}
                                <div className="input-group mb-3">
                                    <input type='text' className="form-control" value={techInput} placeholder="Saisir votre compétence" onChange={(event) => setTechInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button onClick={() => createTechnique()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

