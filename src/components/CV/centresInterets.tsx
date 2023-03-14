import { useState, useEffect } from 'react';
import Interet from './centreInteret';


type TCInt = {
    id: number,
    intitule: string

}
export default function CentreInterets() {

    const [interet, setInteret] = useState<TCInt[]>([]);
    const [intInput, setIntInput] = useState("");
    //POST request fetch inside useEffect React hooks

    async function createInteret() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MjQ3NDg0LCJleHAiOjE2ODIyNDc0ODR9.XUDUNkBZiqT3fUmdn9IDW5K2kb2BegVxDZpMMNUQ_U4'
            },
            body: JSON.stringify({
                intitule: intInput
            })
        };

        const response = await fetch('http://localhost:8000/interets', /*{ method: "POST" }*/requestOptions);

        const responseJson = await response.json();

        console.log("Success!", responseJson);

        setInteret([...interet, responseJson]);
        setIntInput("");
    };
    async function getInteret() {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            },
        };
        const response = await fetch('http://localhost:8000/interets', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setInteret(responseJson);

    };
    useEffect(() => {
        getInteret();
    }, []);

    function deleteInteret(id: number) {
        const newInteret = interet.filter(item => item.id !== id)
        setInteret(newInteret);
    }
    const listInteret = interet?.map(item => <Interet del={deleteInteret} item={item} key={item.id} />)

    return (

        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> CENTRES D'INTÉRÊTS</div>
                        </button>
                    </h2>


                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                        <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="p-2">
                                    <div className="col">
                                        {listInteret}
                                    </div>
                                </div>
                            </div>


                            <div className="input-group mb-3">
                                <input type='text' className="form-control" value={intInput} placeholder="Centre d'intérêt" onChange={(event) => setIntInput(event.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                <button onClick={() => createInteret()} type="button" className="btn btn-outline-info" data-mdb-ripple-color="dark">
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

