import { useState, useEffect } from 'react';
import Formation from './formation';

type TForm = {
    id: number,
    specialite: string,
    diplôme: string,
    date_obtention: Date,
}



export default function Formations() {

    const [formation, setFormation] = useState<TForm[]>([]);

    const [formInput, setFormInput] = useState("");
    const [diplomeInput, setDiplomeInput] = useState("");
    const [dateInput, setDateInput] = useState("");


    /*  const body = {
         specialite: formInput,
         diplôme: formInput,
         date_obtention: formInput
     } */
    async function createFormation() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6OCwiaWF0IjoxNjc2OTY4NTA5LCJleHAiOjE2ODE5Njg1MDl9.BwDYPpK0WHJYcviyhTb05rCmqI0I1wWXbiYjC_VZbiY'
            },
            body: JSON.stringify({
                specialite: formInput,
                diplôme: diplomeInput,
                date_obtention: dateInput
            })
        };

        const response = await fetch('http://localhost:8000/formations', requestOptions)
        const responseJson = await response.json();

        /*  if (!response.ok) {
             // get error message from body or default to response status
             const error = (responseJson && responseJson.message) || response.status;
             return Promise.reject(error);
         } */
        console.log("Success!", responseJson);

        setFormation([...formation, responseJson]);
        setFormInput("");
        setDiplomeInput("");
        setDateInput("");
    };

    async function getFormations() {

        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            },
        };


        const response = await fetch('http://localhost:8000/formations', requestOptions)
        const responseJson = await response.json();

        /* if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        } */
        console.log("Success!", responseJson);
        setFormation(responseJson);

    };
    useEffect(() => {
        getFormations();
    }, []);
    const listFormation = formation?.map(item => <Formation item={item} key = {item.id}/>)
    /* const listFormation = formation?.map((item) => (
        <div className='grid-row' key={item.id}>
            <div className='grid_item'>
                <h5 className='grid_specialite'>{item.specialite}</h5>
            </div>
            <div className="grid text-left" >
                <div className="g-col-6">{item.date_obtention}</div>
                <div className="g-col-4">{item.diplôme}</div>
            </div>

        </div>
 
    ))*/
    return (


        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item ms-4 me-4">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <div className="position-absolute top-50 start-50 translate-middle text-center"> FORMATIONS</div>
                        </button>
                    </h2>

                    {/* <!-- Get All Formations --> */}
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        </div>
                        <ul>
                            {listFormation}
                        </ul>
                        {/* <!-- Add Formations button --> */}
                        <div className="btn-group mb-2 mt-2 ms-2 me -2" role="group" aria-label="Third group">
                            <input type='text' value={formInput} placeholder="Saisir votre formation" onChange={(event) => setFormInput(event.target.value)}></input>
                            <input type='text' value={diplomeInput} placeholder="Saisir votre diplôme" onChange={(event) => setDiplomeInput(event.target.value)}></input>
                            <input type='text' value={dateInput} placeholder="Date d'obtention" onChange={(event) => setDateInput(event.target.value)}></input>
                            <button onClick={() => createFormation()} type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}








