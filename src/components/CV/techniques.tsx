import { useState, useEffect } from 'react';





type TTech = {
    id: number;
    libelle: string;
}

export default function Technique() {

    const [technique, setTechnique] = useState<TTech[]>([]);//array qui contient des techniques
    const [techInput, setTechInput] = useState<string>("");

    /*  const body = {
 
         libelle: techInput
     } */

    //useEffect(async() => {
    async function createTechnique() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            },
        };
        const response = await fetch('http://localhost:8000/techniques', requestOptions)
        const responseJson = await response.json();
        console.log(responseJson);
        console.log("Success!", responseJson);
        setTechnique(responseJson);

    };

    async function patchTechnique() {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            },
            body: JSON.stringify({

                libelle: techInput
            })
        };
        const response = await fetch('http://localhost:8000/techniques/', requestOptions)
        const responseJson = await response.json();

        console.log("Success!", responseJson);
        setTechnique(responseJson);
    };

    async function deleteTechnique() {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNhbmR5QkBnbWFpbC5mciIsInN1YiI6MTgsImlhdCI6MTY3ODY5NzA5NiwiZXhwIjoxNjgzNjk3MDk2fQ.KuPHnEt0EiYAA9jEVxfR2Vvj95oWOYEvuuEqlRSKtGw'
            }
        };

        const response = await fetch('http://localhost:8000/techniques/', requestOptions)
        const responseJson = await response.json()
        console.log("Success!", responseJson);
        setTechnique(responseJson);
    }

    useEffect(() => {
        getTechnique();
    }, []);

    const listTechnique = technique?.map((item) => (
        <li>
            <p>{item?.libelle}</p>
        </li>
    ))

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
                                    <ul>
                                        <tbody>
                                            {listTechnique}
                                        </tbody>
                                    </ul>
                                </div>
                            </div>

                            <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">
                                {/* <!-- Add button --> */}
                                <button type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                    <i className="bi bi-plus"></i>
                                </button>
                                <input type='text' value={techInput} placeholder="Votre compétence ici" onChange={(event) => setTechInput(event.target.value)}></input>
                                <button onClick={() => createTechnique()}>Valider</button>


                                {/* <!-- Update button --> */}
                                <button type="button" className="btn btn-outline-warning btn-rounded-floating" data-mdb-ripple-color="dark" >
                                    <i className="bi bi-pencil"></i>
                                </button>
                                {/* <!-- Delete button --> */}
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

