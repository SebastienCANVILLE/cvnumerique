import { useState } from 'react';
import './cv.css'

type TFonc = {
    id: number;
    libelle: string;
    user: {}
}
export default function Fonctionnelle() {

    const [fonc, setFonc] = useState<TFonc | undefined>();
    const [foncInput, setFoncInput] = useState("")
    //POST request fetch inside useEffect React hooks

    async function fetchData() {
        const body = {
            libelle: foncInput
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpZUBnbWFpbC5mciIsInN1YiI6OCwiaWF0IjoxNjc2OTY4NTA5LCJleHAiOjE2ODE5Njg1MDl9.BwDYPpK0WHJYcviyhTb05rCmqI0I1wWXbiYjC_VZbiY'
            },
            body: JSON.stringify(body)
        };

        const response = await fetch('http://localhost:8000/fonctionnelles', requestOptions)
        const responseJson = await response.json();
        setFonc(responseJson);


    }


    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            <div className= "position-absolute top-50 start-50 translate-middle text-center">COMPETENCES FONCTIONNELLES</div>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element. These classes control the overall appearance, as well as the
                            showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                        <div className="btn-group mb-2 mt-2 ms-2" role="group" aria-label="Third group">
                            {/* <!-- Add button --> */}
                            <button type="button" className="btn btn-outline-info btn-rounded-floating" data-mdb-ripple-color="dark">
                                <i className="bi bi-plus"></i>
                            </button>
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



        /*  <div>
             <div className="card text-center m-3">
                 <h4>Compétences Fonctionnelles</h4>
                 <h5 className="card-header">{fonc?.libelle}</h5>
 
                 <input type='text' onChange={(event) => setFoncInput(event.target.value)}></input>
                 <button onClick={fetchData}>Valider</button>
             </div>
         </div> */
    );

};

export { Fonctionnelle };