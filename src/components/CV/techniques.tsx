import { useState, useEffect } from 'react';



type TTech = {
    id: number;
    libelle: string;
    user: {}
}

export default function Technique() {

    const [technique, setTechnique] = useState<TTech | undefined>();
    const [techInput, setTechInput] = useState("")

    const body = {

        libelle: techInput
    }

    //useEffect(async() => {
    async function createTechnique() {

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

        if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success!", responseJson);

        setTechnique(responseJson);
    };
    async function getTechnique() {

        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            },

            body: JSON.stringify(body)
        };


        const response = await fetch('http://localhost:8000/techniques', requestOptions)
        const responseJson = await response.json();

        if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success!", responseJson);

        setTechnique(responseJson.technique);

    };

    async function patchTechnique() {

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/techniques/', requestOptions)
        const responseJson = await response.json();
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success!", responseJson);

        setTechnique(responseJson.technique);
    };
    async function deleteTechnique() {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6MSwiaWF0IjoxNjc3MDA1MDc3LCJleHAiOjE2ODIwMDUwNzd9.zkOyUiBggcgOtdOdNzwI4orxX-gV5fMmEacWqZn4Zk4'
            }
        };

        const response = await fetch('http://localhost:8000/techniques/', requestOptions)
        const responseJson = await response.json()
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (responseJson && responseJson.message) || response.status;
            return Promise.reject(error);
        }
        console.log("Success!", responseJson);

        setTechnique(responseJson.technique);
    }

    useEffect(() => {

        getTechnique();

    }, []);
    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            COMPETENCES TECHNIQUES
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            <div className="btn-group mb-1 mt-2 ms-2" role="group" aria-label="Third group">
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
        </div>



    );
    {/* <div className="card text-center m-3">
                <h4>Compétences Techniques</h4>
                <h5 className="card-header ms-3"></h5>
                <input type='text' onChange={(event) => setTechInput(event.target.value)}></input>
                <button onClick={() => createTechnique()}>Valider</button>



                <div className="card text-center m-3" >
                    <h6>Affichage des compétences techniques</h6>

                    {techInput.libelle?.map((item: any) =>
                    <option key={item.id} className="font-weight-bold text-info">
                        {item.libelle}
                        <h5>{item.libelle}</h5>
                    </option>)} 
                </div>
            </div> */}

}

